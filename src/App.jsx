import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route>
            
          </Route>
        </Routes>
        </BrowserRouter>
       </div> 
    </>
  )
}

export default App
