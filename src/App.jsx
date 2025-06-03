import { BrowserRouter, Routes, Route } from 'react-router'


import './App.css'
import Home from './pages/home'
import Detail from './pages/detailpage'
import Category from './pages/category'
import AboutUs from './pages/AboutUs'
import Product from './pages/Product'
import Map from './pages/Map/Map'

import Login from './pages/Login';
import Register from './pages/Register';

import ScrollToTop from './ScrollToTop'
import { persistor, store } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { feedProducts } from './api/firestore'

const queryClient = new QueryClient()

// feedProducts();

function App() {


  return (
    <>
      <div className="relative min-h-screen bg-white">
        <div className="absolute inset-0 w-full bg-white/15 z-1 "></div>
        <div className="relative z-10 text-black">
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                  <ScrollToTop />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Product" element={<Product />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/Map" element={<Map />} />
                    <Route path="breakfast">
                      <Route path="/breakfast/category/:foodcategory" element={<Category />} />
                      <Route path="id/:foodid" element={<Detail />} />
                    </Route>
                    <Route path="auth">
                      <Route path="login" element={<Login />} />
                      <Route path="register" element={<Register />} />
                    </Route>
                  </Routes>
                </BrowserRouter>
              </PersistGate>
            </Provider>
          </QueryClientProvider>
        </div>
      </div>
    </>
  )
}


export default App