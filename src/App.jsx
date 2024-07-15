import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import ContactBook from './components/ContactBook'
import GlobalStyle from "../src/globalStyles/globalstyles"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle />
     <ContactBook />
    </>
  )
}

export default App
