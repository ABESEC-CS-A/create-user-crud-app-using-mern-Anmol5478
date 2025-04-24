import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ViewUser from './ALL'
import './App.css'
import Header from './Header'
import Footer from './Footer'

function App() {

  return (
    <>
    <div>
      <Header/>
      <ViewUser/>
      <Footer/>
    </div>
    </>
  )
}

export default App
