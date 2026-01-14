import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './client/components/navbar/Navbar'
import HomePage from './client/pages/HomePage'
import Footer from './client/components/footer/Footer'
import AboutPage from './client/pages/AboutPage'
import ServicesPage from './client/pages/ServicesPage'
import Gallery from './client/pages/Gallery'
import Contact from './client/pages/Contact'
import ProductPage from './client/pages/ProductViewPage'
import ProductList from './client/pages/ProductList'
import CallButton from './client/components/CallButton'

// ScrollToTop Component: Page change hone par automatically top par le jayega
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      <Navbar />

      <main className="min-h-screen bg-white">
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<ProductList />} />
          {/* 404 Page (Optional but professional) */}
          <Route path="*" element={
            <div className="h-screen flex items-center justify-center font-black text-4xl">
              404 | RESOURCE NOT FOUND
            </div>
          } />
        </Routes>
      </main>
      
      <CallButton />
      {/* Footer har page ke niche automatically dikhega */}
      <Footer />
    </Router>
  )
}

export default App