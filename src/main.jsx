import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// What do you observe?
// line 1 is saying that I want to interact and be able to create components which will then create a function that will return JSX
//Can you describe what is happening in this file?
// line 2 is saying this is displaying all of our codes on the browser.  The ReactDOM creates this virtual DOM and allows us to take all of our React code and push it on the browser.