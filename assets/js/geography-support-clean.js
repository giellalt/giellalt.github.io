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
    
    // Add custom CSS for map labels
    const labelCSS = document.createElement('style');
    labelCSS.textContent = `
      .map-label-text {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
      }
      
      .map-label-text:hover {
        z-index: 1000 !important;
      }
      
      .map-label-text.touch-active {
        font-size: 12px !important;
        padding: 4px 8px !important;
      }
    `;
    document.head.appendChild(labelCSS);
    
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

// Helper function to add gradient circle around a point
function addGradientCircle(map, lat, lng, radiusKm, color) {
  // Convert km to meters for Leaflet
  const radiusMeters = radiusKm * 1000;
  
  // Create multiple concentric circles with same low opacity for cumulative gradient effect
  const circles = [];
  const steps = 50; // Number of gradient steps
  const individualOpacity = 0.02; // 2% opacity per circle - builds up to ~100% in center
  
  for (let i = 0; i < steps; i++) {
    const ratio = (i + 1) / steps;
    const currentRadius = radiusMeters * ratio;
    
    const circle = L.circle([lat, lng], {
      radius: currentRadius,
      fillColor: color,
      fillOpacity: individualOpacity, // Same low opacity for all circles
      color: color,
      weight: 0, // No border
      opacity: 0 // No border opacity
    }).addTo(map);
    
    circles.push(circle);
  }
  
  return circles;
}

// Render interactive map with Leaflet (GitHub-style alternative)
function renderLeafletMap(container, geoData, title, isFullscreen = false) {
  try {
    const height = isFullscreen ? '100%' : 400;
    container.innerHTML = '';
    
    // Create map container
    const mapContainer = document.createElement('div');
    if (isFullscreen) {
      mapContainer.style.cssText = `width: calc(100% - 40px); height: calc(100% - 60px); position: relative; flex: 1; margin: 20px; z-index: 1;`;
    } else {
      mapContainer.style.cssText = `width: 100%; height: ${height}px; position: relative;`;
    }
    mapContainer.id = 'map-' + Math.random().toString(36).substr(2, 9);
    
    // Add fullscreen button (only if not already in fullscreen)
    if (!isFullscreen) {
      const fullscreenBtn = document.createElement('button');
      fullscreenBtn.innerHTML = '⛶';
      fullscreenBtn.title = 'Open in fullscreen';
      fullscreenBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1000;
        background: white;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 32px;
        height: 32px;
        font-size: 14px;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
      `;
      
      fullscreenBtn.addEventListener('mouseenter', () => {
        fullscreenBtn.style.backgroundColor = '#f0f0f0';
        fullscreenBtn.style.transform = 'scale(1.1)';
      });
      
      fullscreenBtn.addEventListener('mouseleave', () => {
        fullscreenBtn.style.backgroundColor = 'white';
        fullscreenBtn.style.transform = 'scale(1)';
      });
      
      fullscreenBtn.addEventListener('click', () => {
        openFullscreenMap(mapContainer, geoData, title);
      });
      
      mapContainer.appendChild(fullscreenBtn);
    }
    container.appendChild(mapContainer);
    
    // Calculate center point and zoom from data
    let centerLng = 0; 
    let centerLat = 0;
    let zoom = 2; // Start with world view
    let bounds = null;
    
    // Collect all coordinates from the data
    let allCoords = [];
    
    // Helper function to extract coordinates from any geometry type
    function extractCoordinates(geometry) {
      if (!geometry || !geometry.coordinates) return [];
      
      switch (geometry.type) {
        case 'Point':
          return [geometry.coordinates];
        case 'LineString':
          return geometry.coordinates;
        case 'Polygon':
          // For polygons, coordinates are [[[lng,lat], [lng,lat], ...]] (array of rings)
          // We want all coordinates from all rings (usually just the outer ring)
          return geometry.coordinates.flat();
        case 'MultiPoint':
          return geometry.coordinates;
        case 'MultiLineString':
          return geometry.coordinates.flat();
        case 'MultiPolygon':
          // MultiPolygon: [[[[lng,lat], ...]], [[[lng,lat], ...]]] 
          return geometry.coordinates.flat(2);
        default:
          return [];
      }
    }
    
    // Helper function to add padding around points with gradient circles
    function expandCoordsForGradient(coords, radiusKm) {
      if (!radiusKm || coords.length === 0) return coords;
      
      // Convert km to approximate degrees (rough approximation: 1 degree ≈ 111 km)
      // Add 50% extra padding to ensure gradient + some air around it
      const radiusDegrees = (radiusKm * 1.5) / 111;
      
      // Add padding points around the original coordinates to ensure gradient fits with air
      const expandedCoords = [...coords];
      coords.forEach(coord => {
        const [lng, lat] = coord;
        // Add points at the cardinal directions to expand the bounds
        expandedCoords.push([lng - radiusDegrees, lat]); // West
        expandedCoords.push([lng + radiusDegrees, lat]); // East
        expandedCoords.push([lng, lat - radiusDegrees]); // South
        expandedCoords.push([lng, lat + radiusDegrees]); // North
        // Add diagonal points for better coverage
        expandedCoords.push([lng - radiusDegrees, lat - radiusDegrees]); // SW
        expandedCoords.push([lng + radiusDegrees, lat - radiusDegrees]); // SE
        expandedCoords.push([lng - radiusDegrees, lat + radiusDegrees]); // NW
        expandedCoords.push([lng + radiusDegrees, lat + radiusDegrees]); // NE
      });
      
      return expandedCoords;
    }
    
    if (geoData.type === 'Feature' && geoData.geometry) {
      allCoords = extractCoordinates(geoData.geometry);
      
      // Expand coordinates if gradient circle is specified
      if (geoData.geometry.type === 'Point' && geoData.properties && geoData.properties.radius) {
        allCoords = expandCoordsForGradient(allCoords, geoData.properties.radius);
      }
    } else if (geoData.features && geoData.features.length > 0) {
      // GeoJSON FeatureCollection
      geoData.features.forEach(feature => {
        if (feature.geometry) {
          let coords = extractCoordinates(feature.geometry);
          
          // Expand coordinates if gradient circle is specified for points
          if (feature.geometry.type === 'Point' && feature.properties && feature.properties.radius) {
            coords = expandCoordsForGradient(coords, feature.properties.radius);
          }
          
          allCoords = allCoords.concat(coords);
        }
      });
    } else if (geoData.type && ['Point', 'LineString', 'Polygon', 'MultiPoint', 'MultiLineString', 'MultiPolygon'].includes(geoData.type)) {
      // Raw geometry object (not wrapped in Feature)
      allCoords = extractCoordinates(geoData);
    } else if (geoData.type === 'Topology' && geoData.objects) {
      // TopoJSON - extract coordinates from all objects
      Object.values(geoData.objects).forEach(object => {
        if (object.type === 'GeometryCollection' && object.geometries) {
          object.geometries.forEach(geom => {
            if (geom.type === 'Point' && geom.coordinates) {
              allCoords.push(geom.coordinates);
            }
            // Add support for other TopoJSON geometry types if needed
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
      
      // Calculate appropriate zoom based on coordinate spread - more aggressive zooming
      const lngSpread = Math.max(...lngs) - Math.min(...lngs);
      const latSpread = Math.max(...lats) - Math.min(...lats);
      const maxSpread = Math.max(lngSpread, latSpread);
      
      // More aggressive zoom levels for better data visibility
      if (allCoords.length === 1) {
        zoom = 10;  // Single point - close zoom
      } else if (maxSpread < 0.001) {
        zoom = 15; // Extremely close points (building level)
      } else if (maxSpread < 0.01) {
        zoom = 12; // Very close points (neighborhood level)
      } else if (maxSpread < 0.1) {
        zoom = 10; // Close points (city district)
      } else if (maxSpread < 1) {
        zoom = 8;  // City level
      } else if (maxSpread < 5) {
        zoom = 7;  // Metropolitan area
      } else if (maxSpread < 20) {
        zoom = 6;  // Regional level
      } else if (maxSpread < 50) {
        zoom = 5;  // Country level
      } else if (maxSpread < 100) {
        zoom = 4;  // Large country level
      } else {
        zoom = 3;  // Continental level
      }
      
      // Remove the extra zoom-out - keep the calculated zoom
      // This allows for tighter framing of the data
      
      // Check if gradient circles are involved and zoom out one more level for safety
      let hasGradient = false;
      if (geoData.type === 'Feature' && geoData.properties && geoData.properties.radius) {
        hasGradient = true;
      } else if (geoData.features) {
        hasGradient = geoData.features.some(f => f.properties && f.properties.radius);
      }
      
      if (hasGradient) {
        zoom = Math.max(1, zoom - 1); // Zoom out one more level when gradients are present
      }
    } else {
      // Fallback if no coordinates found
      centerLng = 0;
      centerLat = 0;
      zoom = 2;
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
            width: 12px; 
            height: 12px; 
            background-color: #ea4335; 
            border: 1px solid white;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            margin: -6px 0 0 -6px;
            box-shadow: 0 1px 2px rgba(0,0,0,0.3);
          "></div>`,
          iconSize: [12, 12],
          iconAnchor: [3, 9] // Adjusted for droplet tip position after rotation
        });
        
        const marker = L.marker([
          geoData.geometry.coordinates[1], 
          geoData.geometry.coordinates[0]
        ], { icon: markerIcon }).addTo(map);
        
        // Add name label if available
        if (geoData.properties && geoData.properties.name) {
          const labelId = 'label-' + Math.random().toString(36).substr(2, 9);
          const labelIcon = L.divIcon({
            className: 'custom-label-icon-hover',
            html: `<div id="${labelId}" class="map-label-text" style="
              background: rgba(255, 255, 255, 0.95);
              border: 1px solid #ccc;
              border-radius: 4px;
              padding: 2px 4px;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
              font-size: 8px;
              font-weight: 500;
              color: #333;
              white-space: nowrap;
              box-shadow: 0 1px 3px rgba(0,0,0,0.2);
              text-align: center;
              min-width: fit-content;
              display: inline-block;
              transform: translateX(-50%);
              position: relative;
              left: -3px;
              cursor: pointer;
              transition: all 0.2s ease;
            ">${geoData.properties.name}</div>`,
            iconSize: [0, 0],
            iconAnchor: [0, 40] // Optimal height above the smaller droplet marker
          });
          
          const labelMarker = L.marker([
            geoData.geometry.coordinates[1], 
            geoData.geometry.coordinates[0]
          ], { icon: labelIcon }).addTo(map);
          
          // Add interactive events after the marker is added
          setTimeout(() => {
            const labelElement = document.getElementById(labelId);
            if (labelElement) {
              let touchTimeout;
              
              labelElement.addEventListener('mouseenter', () => {
                // Create a temporary overlay label on top
                const overlayLabel = document.createElement('div');
                overlayLabel.textContent = labelElement.textContent;
                overlayLabel.id = 'temp-overlay-' + labelElement.id;
                overlayLabel.style.cssText = `
                  position: fixed;
                  background: rgba(255, 255, 255, 0.95);
                  border: 1px solid #888;
                  border-radius: 4px;
                  padding: 4px 8px;
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  z-index: 999999;
                  pointer-events: none;
                  white-space: nowrap;
                  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                  opacity: 0;
                  transition: opacity 0.2s ease;
                  transform: translate(-50%, -50%);
                `;
                
                // Position it centered over the original label
                const rect = labelElement.getBoundingClientRect();
                overlayLabel.style.left = (rect.left + rect.width / 2) + 'px';
                overlayLabel.style.top = (rect.top + rect.height / 2) + 'px';
                
                document.body.appendChild(overlayLabel);
                
                // Animate in after a tiny delay
                setTimeout(() => {
                  overlayLabel.style.opacity = '1';
                }, 10);
                
                // Also make original label bigger but transparent
                labelElement.style.fontSize = '12px';
                labelElement.style.padding = '4px 8px';
                labelElement.style.opacity = '0.3';
              });
              
              labelElement.addEventListener('mouseleave', () => {
                // Remove the overlay label with fade out
                const overlayLabel = document.getElementById('temp-overlay-' + labelElement.id);
                if (overlayLabel) {
                  overlayLabel.style.opacity = '0';
                  setTimeout(() => {
                    if (overlayLabel.parentNode) {
                      document.body.removeChild(overlayLabel);
                    }
                  }, 200);
                }
                
                // Restore original label
                labelElement.style.fontSize = '8px';
                labelElement.style.padding = '2px 4px';
                labelElement.style.opacity = '1';
              });
              
              labelElement.addEventListener('touchstart', (e) => {
                e.preventDefault();
                labelElement.style.fontSize = '12px';
                labelElement.style.padding = '4px 8px';
                
                // Auto-shrink after 3 seconds on touch
                clearTimeout(touchTimeout);
                touchTimeout = setTimeout(() => {
                  labelElement.style.fontSize = '8px';
                  labelElement.style.padding = '2px 4px';
                }, 3000);
              });
            }
          }, 100);
        }
        
        // Add gradient circle if radius is specified
        if (geoData.properties && geoData.properties.radius) {
          const circleColor = geoData.properties['marker-color'] || '#ff4444';
          const radiusKm = geoData.properties.radius;
          
          addGradientCircle(
            map,
            geoData.geometry.coordinates[1], // lat
            geoData.geometry.coordinates[0], // lng
            radiusKm,
            circleColor
          );
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
      // Add all features with custom styling - handle mixed geometry types
      L.geoJSON(geoData, {
        pointToLayer: function(feature, latlng) {
          // Only called for Point geometries
          // Create custom droplet marker for points
          const markerIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="
              width: 12px; 
              height: 12px; 
              background-color: #ea4335; 
              border: 1px solid white;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              margin: -6px 0 0 -6px;
              box-shadow: 0 1px 2px rgba(0,0,0,0.3);
            "></div>`,
            iconSize: [12, 12],
            iconAnchor: [3, 9] // Adjusted for droplet tip position
          });
          
          const marker = L.marker(latlng, { icon: markerIcon });
          
          // Add name label if available
          if (feature.properties && feature.properties.name) {
            const labelId = 'label-' + Math.random().toString(36).substr(2, 9);
            const labelIcon = L.divIcon({
              className: 'custom-label-icon-hover',
              html: `<div id="${labelId}" class="map-label-text" style="
                background: rgba(255, 255, 255, 0.95);
                border: 1px solid #ccc;
                border-radius: 4px;
                padding: 2px 4px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
                font-size: 8px;
                font-weight: 500;
                color: #333;
                white-space: nowrap;
                box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                text-align: center;
                min-width: fit-content;
                display: inline-block;
                transform: translateX(-50%);
                position: relative;
                left: -3px;
                cursor: pointer;
                transition: all 0.2s ease;
              ">${feature.properties.name}</div>`,
              iconSize: [0, 0],
              iconAnchor: [0, 40] // Optimal height above the smaller droplet marker
            });
            
            const labelMarker = L.marker(latlng, { icon: labelIcon }).addTo(map);
            
            // Add interactive events after the marker is added
            setTimeout(() => {
              const labelElement = document.getElementById(labelId);
              if (labelElement) {
                let touchTimeout;
                
                labelElement.addEventListener('mouseenter', () => {
                  // Create a temporary overlay label on top
                  const overlayLabel = document.createElement('div');
                  overlayLabel.textContent = labelElement.textContent;
                  overlayLabel.id = 'temp-overlay-' + labelElement.id;
                  overlayLabel.style.cssText = `
                    position: fixed;
                    background: rgba(255, 255, 255, 0.95);
                    border: 1px solid #888;
                    border-radius: 4px;
                    padding: 4px 8px;
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    z-index: 999999;
                    pointer-events: none;
                    white-space: nowrap;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                    opacity: 0;
                    transition: opacity 0.2s ease;
                    transform: translate(-50%, -50%);
                  `;
                  
                  // Position it centered over the original label
                  const rect = labelElement.getBoundingClientRect();
                  overlayLabel.style.left = (rect.left + rect.width / 2) + 'px';
                  overlayLabel.style.top = (rect.top + rect.height / 2) + 'px';
                  
                  document.body.appendChild(overlayLabel);
                  
                  // Animate in after a tiny delay
                  setTimeout(() => {
                    overlayLabel.style.opacity = '1';
                  }, 10);
                  
                  // Also make original label bigger but transparent
                  labelElement.style.fontSize = '12px';
                  labelElement.style.padding = '4px 8px';
                  labelElement.style.opacity = '0.3';
                });
                
                labelElement.addEventListener('mouseleave', () => {
                  // Remove the overlay label with fade out
                  const overlayLabel = document.getElementById('temp-overlay-' + labelElement.id);
                  if (overlayLabel) {
                    overlayLabel.style.opacity = '0';
                    setTimeout(() => {
                      if (overlayLabel.parentNode) {
                        document.body.removeChild(overlayLabel);
                      }
                    }, 200);
                  }
                  
                  // Restore original label
                  labelElement.style.fontSize = '8px';
                  labelElement.style.padding = '2px 4px';
                  labelElement.style.opacity = '1';
                });
                
                labelElement.addEventListener('touchstart', (e) => {
                  e.preventDefault();
                  labelElement.style.fontSize = '12px';
                  labelElement.style.padding = '4px 8px';
                  
                  // Auto-shrink after 3 seconds on touch
                  clearTimeout(touchTimeout);
                  touchTimeout = setTimeout(() => {
                    labelElement.style.fontSize = '8px';
                    labelElement.style.padding = '2px 4px';
                  }, 3000);
                });
              }
            }, 100);
          }
          
          return marker;
        },
        style: function(feature) {
          // Style for non-Point geometries (Polygon, LineString, etc.)
          return {
            color: '#4caf50',
            weight: 2,
            opacity: 0.8,
            fillColor: '#4caf50',
            fillOpacity: 0.3
          };
        },
        onEachFeature: function(feature, layer) {
          // Add popup for non-Point features if they have names
          if (feature.geometry.type !== 'Point' && feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        }
      }).addTo(map);
      
      // Add gradient circles for points with radius specified
      geoData.features.forEach(feature => {
        if (feature.geometry.type === 'Point' && feature.properties && feature.properties.radius) {
          const circleColor = feature.properties['marker-color'] || '#ff4444';
          const radiusKm = feature.properties.radius;
          
          addGradientCircle(
            map,
            feature.geometry.coordinates[1], // lat
            feature.geometry.coordinates[0], // lng
            radiusKm,
            circleColor
          );
        }
      });
    } else if (geoData.type && ['Point', 'LineString', 'Polygon', 'MultiPoint', 'MultiLineString', 'MultiPolygon'].includes(geoData.type)) {
      // Handle raw geometry objects (not wrapped in Feature)
      if (geoData.type === 'Point') {
        // Create custom droplet marker for raw point
        const markerIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div style="
            width: 12px; 
            height: 12px; 
            background-color: #ea4335; 
            border: 1px solid white;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            margin: -6px 0 0 -6px;
            box-shadow: 0 1px 2px rgba(0,0,0,0.3);
          "></div>`,
          iconSize: [12, 12],
          iconAnchor: [3, 9] // Adjusted for droplet tip position
        });
        
        L.marker([geoData.coordinates[1], geoData.coordinates[0]], { 
          icon: markerIcon 
        }).addTo(map);
      } else {
        // For non-Point raw geometries, wrap in a Feature and use L.geoJSON
        const wrappedFeature = {
          type: 'Feature',
          geometry: geoData,
          properties: {}
        };
        
        L.geoJSON(wrappedFeature, {
          style: {
            color: '#4caf50',
            weight: 2,
            opacity: 0.8,
            fillColor: '#4caf50',
            fillOpacity: 0.3
          }
        }).addTo(map);
      }
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
                  width: 12px; 
                  height: 12px; 
                  background-color: #ea4335; 
                  border: 1px solid white;
                  border-radius: 50% 50% 50% 0;
                  transform: rotate(-45deg);
                  margin: -6px 0 0 -6px;
                  box-shadow: 0 1px 2px rgba(0,0,0,0.3);
                "></div>`,
                iconSize: [12, 12],
                iconAnchor: [3, 9] // Adjusted for droplet tip position
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
                    text-align: center;
                    min-width: fit-content;
                    display: inline-block;
                    transform: translateX(-50%);
                    position: relative;
                    left: -3px;
                  ">${geom.properties.name}</div>`,
                  iconSize: [0, 0],
                  iconAnchor: [0, 40] // Optimal height above the smaller droplet marker
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

// Fullscreen map functionality
function openFullscreenMap(originalMapContainer, geoData, title) {
  // Create fullscreen overlay
  const overlay = document.createElement('div');
  overlay.id = 'map-fullscreen-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease;
  `;
  
  // Create fullscreen map container
  const fullscreenMapContainer = document.createElement('div');
  fullscreenMapContainer.style.cssText = `
    width: calc(100vw - 20px);
    height: calc(100vh - 20px);
    background: white;
    border-radius: 8px;
    position: relative;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
  `;
  
  // Add title header
  const titleHeader = document.createElement('div');
  titleHeader.style.cssText = `
    padding: 20px 20px 10px 20px;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
    background: #f9f9f9;
    border-radius: 8px 8px 0 0;
    position: relative;
    z-index: 10;
    flex-shrink: 0;
  `;
  // Use the actual page title instead of the generic map title
  titleHeader.textContent = document.title || title;
  
  // Add close button
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '✕';
  closeBtn.title = 'Close fullscreen (ESC)';
  closeBtn.style.cssText = `
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 20000;
    background: white;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  `;
  
  closeBtn.addEventListener('mouseenter', () => {
    closeBtn.style.backgroundColor = '#f0f0f0';
    closeBtn.style.transform = 'scale(1.1)';
  });
  
  closeBtn.addEventListener('mouseleave', () => {
    closeBtn.style.backgroundColor = 'white';
    closeBtn.style.transform = 'scale(1)';
  });
  
  // Add preview thumbnail of original page
  const thumbnail = document.createElement('div');
  thumbnail.style.cssText = `
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 120px;
    height: 80px;
    background: white;
    border: 2px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    z-index: 20000;
    transition: all 0.2s ease;
  `;
  
  thumbnail.addEventListener('mouseenter', () => {
    thumbnail.style.transform = 'scale(1.05)';
    thumbnail.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
  });
  
  thumbnail.addEventListener('mouseleave', () => {
    thumbnail.style.transform = 'scale(1)';
    thumbnail.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
  });
  
  // Create a mini version of the original page content
  const thumbnailContent = document.createElement('div');
  thumbnailContent.style.cssText = `
    transform: scale(0.1);
    transform-origin: top left;
    width: 1200px;
    height: 800px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    position: relative;
  `;
  
  // Add a simplified representation of the page
  const pagePreview = document.createElement('div');
  pagePreview.style.cssText = `
    padding: 20px;
    font-size: 60px;
    color: #333;
    line-height: 1.2;
  `;
  pagePreview.innerHTML = `
    <div style="height: 100px; background: #4285f4; margin-bottom: 20px; border-radius: 8px;"></div>
    <div style="height: 40px; background: #ddd; margin-bottom: 10px; border-radius: 4px; width: 80%;"></div>
    <div style="height: 40px; background: #ddd; margin-bottom: 10px; border-radius: 4px; width: 60%;"></div>
    <div style="height: 200px; background: #e8f5e8; margin-bottom: 10px; border-radius: 4px; border: 8px solid #4caf50;"></div>
    <div style="height: 40px; background: #ddd; margin-bottom: 10px; border-radius: 4px; width: 70%;"></div>
  `;
  thumbnailContent.appendChild(pagePreview);
  
  // Add "click to return" text overlay
  const returnText = document.createElement('div');
  returnText.style.cssText = `
    position: absolute;
    bottom: 5px;
    left: 5px;
    right: 5px;
    background: rgba(0,0,0,0.7);
    color: white;
    text-align: center;
    padding: 2px;
    font-size: 10px;
    border-radius: 2px;
  `;
  returnText.textContent = 'Click to return';
  thumbnail.appendChild(returnText);
  
  thumbnail.appendChild(thumbnailContent);
  
  // Close functionality
  function closeFullscreen() {
    overlay.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(overlay);
      document.body.style.overflow = '';
    }, 300);
  }
  
  closeBtn.addEventListener('click', closeFullscreen);
  thumbnail.addEventListener('click', closeFullscreen);
  
  // ESC key handler
  function handleEscape(e) {
    if (e.key === 'Escape') {
      closeFullscreen();
      document.removeEventListener('keydown', handleEscape);
    }
  }
  document.addEventListener('keydown', handleEscape);
  
  // Create the actual map in fullscreen
  fullscreenMapContainer.appendChild(titleHeader);
  
  // Create a separate container for just the map part (so title doesn't get cleared)
  const mapSection = document.createElement('div');
  mapSection.style.cssText = `flex: 1; position: relative; overflow: hidden;`;
  fullscreenMapContainer.appendChild(mapSection);
  
  overlay.appendChild(fullscreenMapContainer);
  
  // Add CSS for animations
  if (!document.getElementById('fullscreen-map-styles')) {
    const styles = document.createElement('style');
    styles.id = 'fullscreen-map-styles';
    styles.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
    `;
    document.head.appendChild(styles);
  }
  
  // Prevent background scrolling
  document.body.style.overflow = 'hidden';
  document.body.appendChild(overlay);
  
  // Render the fullscreen map, then add buttons on top
  setTimeout(() => {
    renderLeafletMap(mapSection, geoData, title, true);
    
    // Add buttons AFTER map is rendered so they stay on top
    fullscreenMapContainer.appendChild(closeBtn);
    fullscreenMapContainer.appendChild(thumbnail);
  }, 100);
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
    mapDiv.style.cssText = 'width: 100%; height: 450px; margin: 15px 0;';
    
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
    mapDiv.style.cssText = 'width: 100%; height: 450px; margin: 15px 0;';
    
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