(function (win, doc) {
  const docEl = doc.documentElement;
  const resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';
  const dpr = window.devicePixelRatio;

  function refreshRem() {
    const width = win.innerWidth
                  || docEl.clientWidth
                  || doc.body.clientWidth;
    if (!width) {
      return;
    }

    let rem = width / 10;
    docEl.style.fontSize = rem + 'px';
  }

  win.addEventListener(resizeEvt, refreshRem, false);
  doc.addEventListener('DOMContentLoaded', refreshRem, false);

  docEl.setAttribute('data-dpr', dpr.toString());
})(window, document);
