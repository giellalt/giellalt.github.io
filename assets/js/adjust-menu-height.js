// Dynamisk justering av max-height på venstremenyen
function adjustLeftMenuHeight() {
  var header = document.querySelector('header');
  var firstP = header ? header.querySelector('p') : null;
  var leftToc = document.getElementById('left_toc');
  var footer = document.querySelector('footer');
  if (leftToc && firstP && footer) {
    var headerRect = header.getBoundingClientRect();
    var firstPRect = firstP.getBoundingClientRect();
    var footerRect = footer.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    // Høgda frå toppen av menyen til botnen av vindauget minus høgda på første p og footer
    var menuTop = leftToc.getBoundingClientRect().top;
    var footerHeight = footerRect.height;
    var firstPHeight = firstPRect.height;
    var availableHeight = windowHeight - menuTop - footerHeight;
    // Juster for ekstra luft om ønskjeleg
    availableHeight -= 16; // 1em ekstra luft
    leftToc.style.maxHeight = availableHeight + 'px';
  }
}
window.addEventListener('resize', adjustLeftMenuHeight);
document.addEventListener('DOMContentLoaded', adjustLeftMenuHeight);
