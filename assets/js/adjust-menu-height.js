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
    var shadowDiv = document.getElementById('left_toc_shadow');
    var showShadow = leftToc.scrollHeight > leftToc.clientHeight + 1;
    if (shadowDiv) {
      if (showShadow) {
        shadowDiv.classList.add('show-shadow');
      } else {
        shadowDiv.classList.remove('show-shadow');
      }
    }
  }
}
window.addEventListener('resize', adjustLeftMenuHeight);
document.addEventListener('DOMContentLoaded', adjustLeftMenuHeight);
window.addEventListener('scroll', adjustLeftMenuHeight);
