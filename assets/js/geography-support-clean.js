/**
 * Geography Support - Clean Version
 * Renders GeoJSON and TopoJSON as proper world maps
 */

// Load required libraries (Leaflet instead of Mapbox for better compatibility)
function loadGeographyLibraries() {
  return new Promise((resolve, reject) => {
    if (window.d3 && window.topojson && window.L) {
      resolve();
      return;
    }
    
    // Load Leaflet CSS
    const leafletCSS = document.createElement('link');
    leafletCSS.rel = 'stylesheet';
    leafletCSS.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    leafletCSS.crossOrigin = '';
    document.head.appendChild(leafletCSS);
    
    // Load D3.js
    const d3Script = document.createElement('script');
    d3Script.src = 'https://d3js.org/d3.v7.min.js';
    d3Script.onload = () => {
      // Load Leaflet
      const leafletScript = document.createElement('script');
      leafletScript.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      leafletScript.onload = () => {
        // Load topojson-client
        const topojsonScript = document.createElement('script');
        topojsonScript.src = 'https://unpkg.com/topojson-client@3';
        topojsonScript.onload = () => {
          resolve();
        };
        topojsonScript.onerror = () => reject(new Error('Failed to load topojson-client'));
        document.head.appendChild(topojsonScript);
      };
      leafletScript.onerror = () => reject(new Error('Failed to load Leaflet'));
      document.head.appendChild(leafletScript);
    };
    d3Script.onerror = () => reject(new Error('Failed to load D3.js'));
    document.head.appendChild(d3Script);
  });
}

// Load world map data
function loadWorldMap() {
  return fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .then(response => response.json());
}

// Render interactive map with Leaflet (GitHub-style alternative)
function renderLeafletMap(container, geoData, title) {
  try {
    const height = 400;
    container.innerHTML = '';
    
    // Create map container
    const mapContainer = document.createElement('div');
    mapContainer.style.cssText = `width: 100%; height: ${height}px; position: relative;`;
    mapContainer.id = 'map-' + Math.random().toString(36).substr(2, 9);
    container.appendChild(mapContainer);
    
    // Calculate center point and zoom from data
    let centerLng = 0; 
    let centerLat = 0;
    let zoom = 2; // Start with world view
    let bounds = null;
    
    // Collect all coordinates from the data
    let allCoords = [];
    
    if (geoData.type === 'Feature' && geoData.geometry) {
      if (geoData.geometry.type === 'Point') {
        allCoords.push(geoData.geometry.coordinates);
      }
    } else if (geoData.features && geoData.features.length > 0) {
      // GeoJSON FeatureCollection
      geoData.features.forEach(feature => {
        if (feature.geometry && feature.geometry.type === 'Point') {
          allCoords.push(feature.geometry.coordinates);
        }
      });
    } else if (geoData.type === 'Topology' && geoData.objects) {
      // TopoJSON - extract coordinates from all objects
      Object.values(geoData.objects).forEach(object => {
        if (object.type === 'GeometryCollection' && object.geometries) {
          object.geometries.forEach(geom => {
            if (geom.type === 'Point' && geom.coordinates) {
              allCoords.push(geom.coordinates);
            }
          });
        }
      });
    }
    
    // Calculate center and zoom based on coordinates
    if (allCoords.length > 0) {
      const lngs = allCoords.map(c => c[0]);
      const lats = allCoords.map(c => c[1]);
      
      centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2;
      centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;
      
      // Calculate appropriate zoom based on coordinate spread - conservative to show all points
      const lngSpread = Math.max(...lngs) - Math.min(...lngs);
      const latSpread = Math.max(...lats) - Math.min(...lats);
      const maxSpread = Math.max(lngSpread, latSpread);
      
      // Much more conservative zoom levels to ensure all points are visible
      if (allCoords.length === 1) {
        zoom = 8;  // Single point - reasonable city level
      } else if (maxSpread < 0.01) {
        zoom = 10; // Very close points
      } else if (maxSpread < 0.1) {
        zoom = 8;  // Close points  
      } else if (maxSpread < 1) {
        zoom = 6;  // City level
      } else if (maxSpread < 5) {
        zoom = 5;  // Regional level
      } else if (maxSpread < 20) {
        zoom = 4;  // Country level
      } else if (maxSpread < 100) {
        zoom = 3;  // Large country level
      } else {
        zoom = 2;  // Continental level
      }
      
      // Add extra padding for multiple points to ensure they're all visible
      if (allCoords.length > 1) {
        zoom = Math.max(1, zoom - 1); // Zoom out one level for better overview
      }
    }
    
    // Initialize Leaflet map
    const map = L.map(mapContainer.id, {
      center: [centerLat, centerLng],
      zoom: zoom,
      zoomControl: true,
      attributionControl: false
    });
    
    // Add OpenStreetMap tiles (same style as GitHub uses)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: ''
    }).addTo(map);
    
    // Add GeoJSON data to map
    if (geoData.type === 'Feature') {
      if (geoData.geometry.type === 'Point') {
        // Create custom marker icon (Google Maps style droplet)
        const markerIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div style="
            width: 24px; 
            height: 24px; 
            background-color: #ea4335; 
            border: 2px solid white;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            margin: -12px 0 0 -12px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          "></div>`,
          iconSize: [24, 24],
          iconAnchor: [12, 24]
        });
        
        const marker = L.marker([
          geoData.geometry.coordinates[1], 
          geoData.geometry.coordinates[0]
        ], { icon: markerIcon }).addTo(map);
        
        // Add name label if available
        if (geoData.properties && geoData.properties.name) {
          const labelIcon = L.divIcon({
            className: 'custom-label-icon',
            html: `<div style="
              background: rgba(255, 255, 255, 0.95);
              border: 1px solid #ccc;
              border-radius: 4px;
              padding: 4px 8px;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
              font-size: 12px;
              font-weight: 500;
              color: #333;
              white-space: nowrap;
              box-shadow: 0 1px 3px rgba(0,0,0,0.2);
              margin-left: 16px;
              margin-top: -12px;
            ">${geoData.properties.name}</div>`,
            iconSize: [0, 0],
            iconAnchor: [0, 0]
          });
          
          L.marker([
            geoData.geometry.coordinates[1], 
            geoData.geometry.coordinates[0]
          ], { icon: labelIcon }).addTo(map);
        }
      } else {
        // Add polygon/line features
        L.geoJSON(geoData, {
          style: {
            color: '#4caf50',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.6
          }
        }).addTo(map);
      }
    } else if (geoData.features) {
      // Add all features with custom styling
      L.geoJSON(geoData, {
        pointToLayer: function(feature, latlng) {
          // Create custom droplet marker for points
          const markerIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="
              width: 24px; 
              height: 24px; 
              background-color: #ea4335; 
              border: 2px solid white;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              margin: -12px 0 0 -12px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            "></div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 24]
          });
          
          const marker = L.marker(latlng, { icon: markerIcon });
          
          // Add name label if available
          if (feature.properties && feature.properties.name) {
            const labelIcon = L.divIcon({
              className: 'custom-label-icon',
              html: `<div style="
                background: rgba(255, 255, 255, 0.95);
                border: 1px solid #ccc;
                border-radius: 4px;
                padding: 4px 8px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
                font-size: 12px;
                font-weight: 500;
                color: #333;
                white-space: nowrap;
                box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                margin-left: 16px;
                margin-top: -12px;
              ">${feature.properties.name}</div>`,
              iconSize: [0, 0],
              iconAnchor: [0, 0]
            });
            
            L.marker(latlng, { icon: labelIcon }).addTo(map);
          }
          
          return marker;
        },
        style: function(feature) {
          if (feature.geometry.type === 'Point') {
            return {};
          }
          return {
            color: '#4caf50',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.6
          };
        }
      }).addTo(map);
    } else if (geoData.type === 'Topology' && geoData.objects) {
      // Handle TopoJSON data
      Object.values(geoData.objects).forEach(object => {
        if (object.type === 'GeometryCollection' && object.geometries) {
          object.geometries.forEach(geom => {
            if (geom.type === 'Point' && geom.coordinates) {
              // Create droplet marker for TopoJSON points
              const markerIcon = L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="
                  width: 24px; 
                  height: 24px; 
                  background-color: #ea4335; 
                  border: 2px solid white;
                  border-radius: 50% 50% 50% 0;
                  transform: rotate(-45deg);
                  margin: -12px 0 0 -12px;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                "></div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 24]
              });
              
              const marker = L.marker([geom.coordinates[1], geom.coordinates[0]], { 
                icon: markerIcon 
              }).addTo(map);
              
              // Add name label if available
              if (geom.properties && geom.properties.name) {
                const labelIcon = L.divIcon({
                  className: 'custom-label-icon',
                  html: `<div style="
                    background: rgba(255, 255, 255, 0.95);
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    padding: 4px 8px;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
                    font-size: 12px;
                    font-weight: 500;
                    color: #333;
                    white-space: nowrap;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                    margin-left: 16px;
                    margin-top: -12px;
                  ">${geom.properties.name}</div>`,
                  iconSize: [0, 0],
                  iconAnchor: [0, 0]
                });
                
                L.marker([geom.coordinates[1], geom.coordinates[0]], { 
                  icon: labelIcon 
                }).addTo(map);
              }
            }
          });
        }
      });
    }
    
  } catch (error) {
    console.error('Error creating Leaflet map:', error);
    // Fallback to simple map
    renderSimpleMap(container, geoData, title);
  }
}

// Fallback simple map rendering
function renderSimpleMap(container, geoData, title) {
  const width = 600;
  const height = 400;
  
  container.innerHTML = '';
  
  const svg = d3.select(container)
    .append('svg')
    .attr('width', '100%')
    .attr('height', height)
    .attr('viewBox', `0 0 ${width} ${height}`)
    .style('background', '#f0f8ff')
    .style('border', '1px solid #ccc');
  
  // Simple grid background
  for (let x = 0; x < width; x += 50) {
    svg.append('line')
      .attr('x1', x).attr('y1', 0)
      .attr('x2', x).attr('y2', height)
      .attr('stroke', '#ddd')
      .attr('stroke-width', 0.5);
  }
  
  for (let y = 0; y < height; y += 50) {
    svg.append('line')
      .attr('x1', 0).attr('y1', y)
      .attr('x2', width).attr('y2', y)
      .attr('stroke', '#ddd')
      .attr('stroke-width', 0.5);
  }
  
  // Draw points
  if (geoData.type === 'Feature' && geoData.geometry.type === 'Point') {
    const coords = geoData.geometry.coordinates;
    // Simple projection for fallback
    const x = (coords[0] + 180) * (width / 360);
    const y = (90 - coords[1]) * (height / 180);
    
    svg.append('circle')
      .attr('cx', x)
      .attr('cy', y)
      .attr('r', 8)
      .attr('fill', '#ff4444')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);
    
    if (geoData.properties && geoData.properties.name) {
      svg.append('text')
        .attr('x', x)
        .attr('y', y - 12)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('fill', '#333')
        .text(geoData.properties.name);
    }
  }
  
  // Add title
  svg.append('text')
    .attr('x', width / 2)
    .attr('y', 25)
    .attr('text-anchor', 'middle')
    .attr('font-size', '16px')
    .attr('font-weight', 'bold')
    .attr('fill', '#333')
    .text(title);
}

// Main processing function
function processGeographyBlocks() {
  const geojsonBlocks = document.querySelectorAll('pre code.language-geojson');
  const topojsonBlocks = document.querySelectorAll('pre code.language-topojson');
  
  if (geojsonBlocks.length === 0 && topojsonBlocks.length === 0) {
    return;
  }
  
  // Load D3.js if needed
  if (typeof d3 === 'undefined') {
    loadGeographyLibraries().then(() => {
      processGeographyBlocks();
    }).catch(error => {
      console.error('Failed to load geography libraries:', error);
    });
    return;
  }
  
  // Process GeoJSON blocks
  geojsonBlocks.forEach((el, index) => {
    const mapDiv = document.createElement('div');
    mapDiv.style.cssText = 'width: 100%; height: 450px; border: 2px solid #2196f3; margin: 15px 0; background: #f8fbff; padding: 15px; box-sizing: border-box;';
    
    el.parentElement.parentNode.replaceChild(mapDiv, el.parentElement);
    
    try {
      const geoData = JSON.parse(el.textContent);
      renderLeafletMap(mapDiv, geoData, 'GeoJSON Map');
    } catch (error) {
      console.error('GeoJSON processing error:', error);
      mapDiv.innerHTML = `<p style="color: red;">Error parsing GeoJSON: ${error.message}</p>`;
    }
  });
  
  // Process TopoJSON blocks
  topojsonBlocks.forEach((el, index) => {
    const mapDiv = document.createElement('div');
    mapDiv.style.cssText = 'width: 100%; height: 450px; border: 2px solid #ff9800; margin: 15px 0; background: #fff8f0; padding: 15px; box-sizing: border-box;';
    
    el.parentElement.parentNode.replaceChild(mapDiv, el.parentElement);
    
    try {
      const topoData = JSON.parse(el.textContent);
      
      if (typeof topojson === 'undefined') {
        mapDiv.innerHTML = '<p>Loading TopoJSON support...</p>';
        loadGeographyLibraries().then(() => {
          const objectKeys = Object.keys(topoData.objects);
          if (objectKeys.length > 0) {
            const geoData = topojson.feature(topoData, topoData.objects[objectKeys[0]]);
            renderLeafletMap(mapDiv, geoData, 'TopoJSON Map');
          }
        }).catch(error => {
          console.error('Library loading error:', error);
          mapDiv.innerHTML = `<p style="color: red;">Error loading libraries: ${error.message}</p>`;
        });
      } else {
        const objectKeys = Object.keys(topoData.objects);
        if (objectKeys.length > 0) {
          const geoData = topojson.feature(topoData, topoData.objects[objectKeys[0]]);
          renderLeafletMap(mapDiv, geoData, 'TopoJSON Map');
        }
      }
    } catch (error) {
      mapDiv.innerHTML = `<p style="color: red;">Error parsing TopoJSON: ${error.message}</p>`;
    }
  });
}

// Run when document is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', processGeographyBlocks);
} else {
  processGeographyBlocks();
}