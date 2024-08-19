import React from 'react' 
import ReactDOM from 'react-dom/client'
import App from './App'
// Tạo component App

import './scss/styles.scss'

const container = ReactDOM.createRoot(document.getElementById('root'))

container.render(
    <>
        <App />
    </>
)

