export default function resize (doc, win) {
  let docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let reCalc = function () {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    if (clientWidth >= 750) {
      docEl.style.fontSize = '100px'
    } else {
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
    }
  }
  if (!doc.addEventListener) {
    return
  }
  win.addEventListener(resizeEvt, reCalc, false)
  doc.addEventListener('DOMContentLoaded', reCalc, false)
}
