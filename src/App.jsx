import React from 'react'
import Add_User from './components/Add_User'
import { Route, Routes } from 'react-router-dom'
import Auth_Page from './components/Auth_Page'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Auth_Page />} />
        <Route path='/add' element={<Add_User />} />
      </Routes>
    </>
  )
}

export default App
