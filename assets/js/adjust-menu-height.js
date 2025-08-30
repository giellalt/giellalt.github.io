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
  }
}
window.addEventListener('resize', adjustLeftMenuHeight);
document.addEventListener('DOMContentLoaded', adjustLeftMenuHeight);
window.addEventListener('scroll', adjustLeftMenuHeight);
