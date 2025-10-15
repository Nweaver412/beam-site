import WarpLogo from '../WarpLogo'

const Shop = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Logo */}
      <div className="pt-16 pb-8 text-center">
        <WarpLogo />
        <h1 
          className="text-4xl md:text-5xl font-light mt-8 mb-4 text-white"
          style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
        >
          Shop
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center">
          <p 
            className="text-lg text-white leading-relaxed mb-12"
            style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
          >
            Discover our curated collection of products that control the light.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Placeholder 1 */}
            <div className="border border-white p-8 text-center">
              <div className="w-full h-48 bg-gray-800 mb-6 flex items-center justify-center">
                <span 
                  className="text-gray-400"
                  style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
                >
                  Product Image
                </span>
              </div>
              <h3 
                className="text-xl font-light mb-4 text-white"
                style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
              >
                WIP Tac-X 500ml Bidon
              </h3>
              <p 
                className="text-white mb-4"
                style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
              >
                Coming Soon
              </p>
            </div>
            
            {/* Product Placeholder 2 */}
            <div className="border border-white p-8 text-center">
              <div className="w-full h-48 bg-gray-800 mb-6 flex items-center justify-center">
                <span 
                  className="text-gray-400"
                  style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
                >
                  Product Image
                </span>
              </div>
              <h3 
                className="text-xl font-light mb-4 text-white"
                style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
              >
                WIP Beam Decal - Black
              </h3>
              <p 
                className="text-white mb-4"
                style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
              >
                Coming Soon
              </p>
            </div>
            
            {/* Product Placeholder 3 */}
            <div className="border border-white p-8 text-center">
              <div className="w-full h-48 bg-gray-800 mb-6 flex items-center justify-center">
                <span 
                  className="text-gray-400"
                  style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
                >
                  Product Image
                </span>
              </div>
              <h3 
                className="text-xl font-light mb-4 text-white"
                style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
              >
                WIP Beam Decal - White
              </h3>
              <p 
                className="text-white mb-4"
                style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
              >
                Coming Soon
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <p 
              className="text-white"
              style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
            >
              More products coming soon. Follow the light.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
