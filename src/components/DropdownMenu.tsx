interface DropdownMenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  setCurrentPage: (page: string) => void
}

const DropdownMenu = ({ isMenuOpen, setIsMenuOpen, setCurrentPage }: DropdownMenuProps) => {
  const handlePageChange = (page: string) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Hamburger Menu Button - Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 p-2"
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed top-20 right-6 z-40 bg-black border border-white">
          <div className="px-4 py-3 space-y-2 min-w-32">
            <button 
              onClick={() => handlePageChange('home')}
              className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium w-full text-left"
              style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
            >
              Home
            </button>
            <button 
              onClick={() => handlePageChange('about')}
              className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium w-full text-left"
              style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
            >
              About
            </button>
            <button 
              onClick={() => handlePageChange('shop')}
              className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium w-full text-left"
              style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
            >
              Shop
            </button>
            <button 
              onClick={() => handlePageChange('contact')}
              className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium w-full text-left"
              style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default DropdownMenu
