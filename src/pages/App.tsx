import { useState } from 'react'
import WarpLogo from '../WarpLogo'
import About from './About'
import Shop from './Shop'
import Contact from './Contact'
import DropdownMenu from '../components/DropdownMenu'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="min-h-screen bg-black text-white">
      <DropdownMenu 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setCurrentPage={setCurrentPage}
      />

      {/* Page Content */}
      {currentPage === 'home' && (
        <section className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <WarpLogo size="large" />
            <h2 
              className="text-2xl md:text-3xl font-light mt-8 text-white"
              style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
            >
              Follow the light.
            </h2>
          </div>
        </section>
      )}

      {currentPage === 'about' && <About />}
      {currentPage === 'shop' && <Shop />}
      {currentPage === 'contact' && <Contact />}

      {/* Footer - Only show on home page */}
      {currentPage === 'home' && (
        <footer className="bg-black border-t border-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p 
                className="text-gray-500"
                style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
              >
                © 2026 Beam. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}

export default App
