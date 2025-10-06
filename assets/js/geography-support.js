/**
 * TopoJSON og GeoJSON støtte
 * Handterer rendering av topojson og geojson kodeblokkar som kart
 */

// Funksjon for å lasta D3.js og topojson-client dynamisk
function loadGeographyLibraries() {
  return new Promise((resolve, reject) => {
    // Sjekk om D3 allereie er lasta
    if (window.d3 && window.topojson) {
      resolve();
      return;
    }
    
    // Last D3.js
    const d3Script = document.createElement('script');
    d3Script.src = 'https://cdn.jsdelivr.net/npm/d3@7';
    d3Script.onload = () => {
      // Last topojson-client
      const topojsonScript = document.createElement('script');
      topojsonScript.src = 'https://cdn.jsdelivr.net/npm/topojson-client@3';
      topojsonScript.onload = () => resolve();
      topojsonScript.onerror = () => reject(new Error('Kunne ikkje lasta topojson-client'));
      document.head.appendChild(topojsonScript);
    };
    d3Script.onerror = () => reject(new Error('Kunne ikkje lasta D3.js'));
    document.head.appendChild(d3Script);
  });
}

// Funksjon for å handtera TopoJSON
function renderTopojsonMap(element, data) {
  try {
    const parsedData = JSON.parse(data);
    
    // Lag container for kartet
    const mapDiv = document.createElement('div');
    mapDiv.className = 'topojson-map';
    
    const width = 800;
    const height = 600;
    
    const svg = d3.select(mapDiv)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .style('width', '100%')
      .style('height', 'auto');
    
    // Laga projektion
    const projection = d3.geoMercator()
      .fitSize([width, height], topojson.feature(parsedData, Object.values(parsedData.objects)[0]));
    
    const path = d3.geoPath().projection(projection);
    
    // Teikn geometriane
    Object.entries(parsedData.objects).forEach(([key, objectData]) => {
      const features = topojson.feature(parsedData, objectData);
      
      svg.selectAll(`.${key}`)
        .data(features.features)
        .enter()
        .append('path')
        .attr('class', key)
        .attr('d', path)
        .style('fill', '#69b3a2')
        .style('stroke', '#fff')
        .style('stroke-width', '1px');
    });
    
    // Byt ut pre-elementet med kartet
    element.parentElement.parentNode.replaceChild(mapDiv, element.parentElement);
    
  } catch (error) {
    console.error('Feil ved rendering av TopoJSON:', error);
    // Vis feilmelding
    const errorDiv = document.createElement('div');
    errorDiv.className = 'topojson-map';
    errorDiv.innerHTML = `<p style="color: red;">Feil ved lasting av TopoJSON-data: ${error.message}</p>`;
    element.parentElement.parentNode.replaceChild(errorDiv, element.parentElement);
  }
}

// Funksjon for å handtera GeoJSON
function renderGeojsonMap(element, data) {
  try {
    const parsedData = JSON.parse(data);
    
    // Lag container for kartet
    const mapDiv = document.createElement('div');
    mapDiv.className = 'geojson-map';
    
    const width = 800;
    const height = 600;
    
    const svg = d3.select(mapDiv)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .style('width', '100%')
      .style('height', 'auto');
    
    // Laga projektion
    const projection = d3.geoMercator()
      .fitSize([width, height], parsedData);
    
    const path = d3.geoPath().projection(projection);
    
    // Teikn geometriane
    svg.selectAll('path')
      .data(parsedData.features || [parsedData])
      .enter()
      .append('path')
      .attr('d', path)
      .style('fill', '#69b3a2')
      .style('stroke', '#fff')
      .style('stroke-width', '1px');
    
    // Byt ut pre-elementet med kartet
    element.parentElement.parentNode.replaceChild(mapDiv, element.parentElement);
    
  } catch (error) {
    console.error('Feil ved rendering av GeoJSON:', error);
    // Vis feilmelding
    const errorDiv = document.createElement('div');
    errorDiv.className = 'geojson-map';
    errorDiv.innerHTML = `<p style="color: red;">Feil ved lasting av GeoJSON-data: ${error.message}</p>`;
    element.parentElement.parentNode.replaceChild(errorDiv, element.parentElement);
  }
}

// Hovudfunksjon for å prosessera alle geography-kodeblokkar
function processGeographyBlocks() {
  loadGeographyLibraries().then(() => {
    // Handter TopoJSON-blokkar
    document.querySelectorAll('pre > code.language-topojson').forEach(el => {
      // Fjern Prism-formatering
      el.parentElement.classList.remove('language-topojson');
      el.className = '';
      
      const data = el.textContent;
      renderTopojsonMap(el, data);
    });
    
    // Handter GeoJSON-blokkar
    document.querySelectorAll('pre > code.language-geojson').forEach(el => {
      // Fjern Prism-formatering
      el.parentElement.classList.remove('language-geojson');
      el.className = '';
      
      const data = el.textContent;
      renderGeojsonMap(el, data);
    });
  }).catch(error => {
    console.error('Kunne ikkje lasta geography-bibliotek:', error);
  });
}

// Initialiser når dokumentet er klart
document.addEventListener('DOMContentLoaded', function() {
  processGeographyBlocks();
});

// Eksporter funksjonane for bruk i andre script
window.processGeographyBlocks = processGeographyBlocks;