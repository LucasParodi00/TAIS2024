import { useState } from 'react'
import { Formulario } from './formulario/Formulario'
import Grid from '@mui/material/Grid2'
import { LayoutContenedor } from './layout/LayoutContenedor'
import { Box } from '@mui/material'
import { Lista } from './Lista'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './layout/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    //   <Box component={'div'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
    //     <Grid container gap={'50px'} sx={{ width: '100%' }} justifyContent={'center'}>
    //       <Grid size={4}>
    //         <Formulario />
    //       </Grid>
    //       <Grid size={7}>
    //         <Lista />
    //       </Grid>
    //     </Grid>

    //   </Box>
    // </>

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
