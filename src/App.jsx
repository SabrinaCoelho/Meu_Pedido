import { RouterProvider } from 'react-router-dom'

import { router } from './router/router'
import { ProvedorTema } from "./Components/ProvedorTema/ProvedorTema"
import { Estilos } from "./Components/EstilosGlobais/Estilos"
import './App.css'

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <RouterProvider router={router} />
    </ProvedorTema>
  )
}

export default App
