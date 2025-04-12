import { BrowserRouter, Routes, Route } from 'react-router'

import './App.css'
import Home from './pages/home'

function App() {

  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-[url('/bg.jpg')] w-full bg-cover bg-center bg-fixed opacity-50 z-0"></div>
        <div className="relative z-10 p-10">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>

      </div>



    </>
  )
}

export default App
