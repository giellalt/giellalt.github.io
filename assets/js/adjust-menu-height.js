// Dynamisk justering av max-height på venstremenyen
function adjustLeftMenuHeight() {
  var leftToc = document.getElementById('left_toc');
  var footer = document.querySelector('footer');
  if (leftToc && footer) {
    var menuTop = leftToc.getBoundingClientRect().top + window.scrollY;
    var footerTop = footer.getBoundingClientRect().top + window.scrollY;
    var availableHeight = footerTop - menuTop;
    availableHeight -= 24; // 1.5em ekstra luft
    leftToc.style.maxHeight = availableHeight + 'px';
    // Skuggeeffekt: berre synleg når menyen kan rullast
    var showShadow = leftToc.scrollHeight > leftToc.clientHeight + 1;
    if (showShadow) {
      leftToc.classList.add('show-shadow');
    } else {
      leftToc.classList.remove('show-shadow');
    }
    // CSS: .show-shadow::after { opacity: 1; }
  }
}
window.addEventListener('resize', adjustLeftMenuHeight);
document.addEventListener('DOMContentLoaded', adjustLeftMenuHeight);
window.addEventListener('scroll', adjustLeftMenuHeight);
