import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Oneko from './Oneko/Oneko.jsx'
import Header from './Header/index.jsx'
import Footer from './Footer/index.jsx'

import './App.css'
import './Style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Oneko/>
      <Footer/>
    </>
  )
}

export default App
