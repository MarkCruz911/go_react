import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <div>
      <button onClick={async ()=>{
        const respuesta=await fetch('/users')
        const data = respuesta.json()
        console.log(data)
        }}>


        Obtener Datos
      </button>
    </div>
  )
}

export default App
