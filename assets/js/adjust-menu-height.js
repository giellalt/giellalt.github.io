// Dynamisk justering av max-height på venstremenyen
function adjustLeftMenuHeight() {
  var leftToc = document.getElementById('left_toc');
  var footer = document.querySelector('footer');
  if (leftToc && footer) {
    var menuTop = leftToc.getBoundingClientRect().top + window.scrollY;
    var footerTop = footer.getBoundingClientRect().top + window.scrollY;
    var availableHeight = footerTop - menuTop;
    availableHeight -= 16; // 1em ekstra luft
    leftToc.style.maxHeight = availableHeight + 'px';
    // Skuggeeffekt: berre synleg når menyen kan rullast
    var shadow = leftToc.parentElement.querySelector('#left_toc::after');
    var showShadow = leftToc.scrollHeight > leftToc.clientHeight + 1;
    leftToc.classList.toggle('show-shadow', showShadow);
    // Fungerer med CSS: .show-shadow::after { opacity: 1; }
  }
}
window.addEventListener('resize', adjustLeftMenuHeight);
document.addEventListener('DOMContentLoaded', adjustLeftMenuHeight);
window.addEventListener('scroll', adjustLeftMenuHeight);
