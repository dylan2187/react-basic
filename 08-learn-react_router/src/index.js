import React, { Suspense } from 'react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <HashRouter>
      <Suspense fallback={<h3>loading...</h3>}>
        <App></App>
      </Suspense>
    </HashRouter>
  </StrictMode>
)
