import { Formulario } from './formulario/Formulario'
import { Lista } from './Lista'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './layout/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Formulario />} />
        <Route path={'/lista'} element={<Lista />} />
        <Route path={'/*'} element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
