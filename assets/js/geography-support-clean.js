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
    mapContainer.style.cssText = `width: 100%; height: ${height}px; border-radius: 6px; overflow: hidden; position: relative;`;
    mapContainer.id = 'map-' + Math.random().toString(36).substr(2, 9);
    container.appendChild(mapContainer);
    
    // Calculate center point from GeoJSON data
    let centerLng = 10.7522; // Default to Oslo
    let centerLat = 59.9139;
    let zoom = 6; // Default zoom
    
    if (geoData.type === 'Feature' && geoData.geometry.type === 'Point') {
      centerLng = geoData.geometry.coordinates[0];
      centerLat = geoData.geometry.coordinates[1];
      zoom = 8; // Closer zoom for single point
    } else if (geoData.features && geoData.features.length > 0) {
      // Calculate center for multiple features
      const coords = geoData.features
        .filter(f => f.geometry && f.geometry.type === 'Point')
        .map(f => f.geometry.coordinates);
      
      if (coords.length > 0) {
        const lngs = coords.map(c => c[0]);
        const lats = coords.map(c => c[1]);
        centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2;
        centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;
        zoom = coords.length === 1 ? 8 : 6;
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
        // Add point marker
        const marker = L.circleMarker([
          geoData.geometry.coordinates[1], 
          geoData.geometry.coordinates[0]
        ], {
          radius: 8,
          fillColor: '#ff4444',
          color: '#ffffff',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.8
        }).addTo(map);
        
        // Add popup with name
        if (geoData.properties && geoData.properties.name) {
          marker.bindPopup(geoData.properties.name).openPopup();
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
      // Add all features
      L.geoJSON(geoData, {
        pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng, {
            radius: 6,
            fillColor: '#ff4444',
            color: '#ffffff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
          });
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
        },
        onEachFeature: function(feature, layer) {
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        }
      }).addTo(map);
    }
    
    // Add title overlay
    const titleDiv = document.createElement('div');
    titleDiv.style.cssText = 'position: absolute; top: 10px; left: 10px; background: rgba(255,255,255,0.95); padding: 8px 12px; border-radius: 4px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; font-size: 14px; font-weight: 600; color: #333; z-index: 1000; box-shadow: 0 2px 8px rgba(0,0,0,0.15); border: 1px solid #e1e4e8;';
    titleDiv.textContent = title;
    mapContainer.appendChild(titleDiv);
    
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