import './styles/style.css'

console.log('Welcome to Vite + JS + Webflow!')
// import animateTitle from './features/animateTitle'
// import createBadge from './features/createBasge'
import Swup from 'swup'
import initAnimation from './features/initAnimation'
import initAnimations from './features/initAnimations'
import initCursor from './features/initCursor'
import initMidnight from './features/initMidnight'
import initParallax from './features/initParallax'
// import initParoller from './features/initParoller'
import smoothScroll from './features/smoothScroll'
import updatePage from './features/updatePage'


// createBadge()
// animateTitle()

const swup = new Swup()

updatePage()
initParallax()
// initParoller()
initAnimations()
initCursor()
initAnimation()
smoothScroll()
initMidnight()

swup.on('contentReplaced',() => {
  updatePage()
  initParallax()
  // initParoller()
  initAnimations()
  initCursor()
  initAnimation()
  smoothScroll()
  initMidnight()
  Webflow.destroy()
  Webflow.ready()
  Webflow.require('ix2').init()
})
