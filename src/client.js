import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from './app'
import './app.css'

render(
  <StrictMode>
    <App />
  </StrictMode>
, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  })
}
