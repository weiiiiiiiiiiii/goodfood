import { BrowserRouter, Routes, Route } from 'react-router'


import './App.css'
import Home from './pages/home'
import Detail from './pages/detailpage'
import Category from './pages/category'
import AboutUs from './pages/AboutUs'


import ScrollToTop from './ScrollToTop'
import store from './redux/store'
import { Provider } from 'react-redux'
import Product from './pages/Product'




function App() {


  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 w-full bg-white/15 z-1 "></div>
        <div className="relative z-10 text-black">


          <Provider store={store}>
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Product" element={<Product />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="breakfast">
                  <Route path="/breakfast/category/:foodcategory" element={<Category />} />
                  <Route path="id/:foodid" element={<Detail />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Provider>
        </div>


      </div>






    </>
  )
}


export default App