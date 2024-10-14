import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/SignIn'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
     </Routes>
    </>
  )
}

export default App
