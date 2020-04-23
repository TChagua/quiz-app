import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import { createGlobalStyle } from 'styled-components'
import App from './components/App'

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    background: #F3F1F1;

    * {
      box-sizing: border-box;
    }
  }
`

Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(
    <>
      <GlobalStyle />
      <App />
    </>,
    document.getElementById('root')
  )
})
