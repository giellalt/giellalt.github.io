/**
 * Touch-funksjonalitet for hamburgermenyen
 * Handterer vising/gøyming av sitemap på små skjermar
 */
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const sitemap = document.querySelector('#sitemap');
  
  if (hamburgerMenu && sitemap) {
    // Toggle sitemap ved klikk på hamburgermenyen
    hamburgerMenu.addEventListener('click', function(e) {
      e.stopPropagation();
      hamburgerMenu.classList.toggle('active');
      sitemap.classList.toggle('show');
    });
    
    // Lukk sitemap ved klikk utanfor
    document.addEventListener('click', function(e) {
      const isClickInsideSitemap = sitemap.contains(e.target);
      const isClickOnHamburger = hamburgerMenu.contains(e.target);
      
      if (!isClickInsideSitemap && !isClickOnHamburger) {
        hamburgerMenu.classList.remove('active');
        sitemap.classList.remove('show');
      }
    });
    
//    // Lukk sitemap ved klikk på sitemap sjølv (for mobil)
//    sitemap.addEventListener('click', function(e) {
//      // Berre lukk viss ein klikkar på sjølve sitemap-containeren, ikkje lenkjene
//      if (e.target === sitemap) {
//        hamburgerMenu.classList.remove('active');
//        sitemap.classList.remove('show');
//      }
//    });
    
    // Touch-hendingar for betre mobiloppleving
    hamburgerMenu.addEventListener('touchstart', function(e) {
      e.preventDefault(); // Hindra dobbel-aktivering med klikk
    });
  }
});