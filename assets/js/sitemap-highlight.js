document.addEventListener('DOMContentLoaded', function() {
    // Finn sitemap-containeren
    const sitemap = document.querySelector('#sitemap');
    if (!sitemap) return;

    // Få tak i gjeldande URL og reinsa han
    let currentPath = window.location.pathname;
    if (currentPath.endsWith('/')) {
        currentPath = currentPath.slice(0, -1);
    }
    if (currentPath.endsWith('index.html') || currentPath.endsWith('index.md')) {
        currentPath = currentPath.replace(/index\.(html|md)$/, '');
    }
    
    // Finn rett lenke i sitemap
    const allLinks = sitemap.querySelectorAll('a');
    let activeLink = null;
    
    for (const link of allLinks) {
        let linkPath = link.getAttribute('href');
        // Fjern trailing slash og index.html/md
        if (linkPath.endsWith('/')) {
            linkPath = linkPath.slice(0, -1);
        }
        linkPath = linkPath.replace(/index\.(html|md)$/, '');
        
        // Sjekk om dette er rett lenke
        if (linkPath === currentPath) {
            activeLink = link;
            break;
        }
    }
    
    if (activeLink) {
        // Marker aktiv lenke
        activeLink.parentElement.classList.add('active-sitemap-item');
        
        // Vent litt for å sikra at DOM er klar, så scroll til elementet
        setTimeout(() => {
            const container = sitemap.querySelector('ul.sitemap');
            if (container) {
                const linkRect = activeLink.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                
                // Scroll slik at elementet er sentrert
                container.scrollTop = (
                    linkRect.top + 
                    container.scrollTop - 
                    containerRect.top - 
                    (containerRect.height - linkRect.height) / 2
                );
            }
        }, 100);
    }
});
