import  React  from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

root = ReactDOM.createRoot(document.getElementById('root'))

const elemento = <span> HOLA MUNDO</span>

root.render(
  <>
    <App/>
    {elemento}
  </>
)
