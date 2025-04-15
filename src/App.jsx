import { BrowserRouter, Routes, Route } from 'react-router'

import './App.css'
import Home from './pages/home'
import Detail from './pages/detailpage'
import AboutUs from './pages/AboutUs'

import ScrollToTop from './ScrollToTop'
import Category from './pages/category'


function App() {

  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-[url('/bg.jpg')] w-full bg-cover bg-center bg-fixed opacity-50 z-0 "></div>
        <div className="absolute inset-0 w-full bg-white/10 z-1 "></div>
        <div className="relative z-10 p-10">
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="breakfast">
                <Route path="/breakfast/category/:foodcategory" element={<Category />} />
                <Route path="id/:foodid" element={<Detail />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>

      </div>



    </>
  )
}

export default App
