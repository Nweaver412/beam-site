import WarpLogo from '../WarpLogo'

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Logo */}
      <div className="pt-16 pb-8 text-center">
        <WarpLogo />
        <h1 
          className="text-4xl md:text-5xl font-light mt-8 mb-4 text-white"
          style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
        >
          Contact
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center">
          <p 
            className="text-lg text-white leading-relaxed mb-12"
            style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
          >
            Ready to begin your journey? Get in touch with us.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="border border-white p-8 text-center">
              <h2 
                className="text-2xl font-light mb-6 text-white"
                style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
              >
                Email Us
              </h2>
              <a 
                href="mailto:nw21010@gmail.com"
                className="text-white hover:text-gray-300 text-xl font-light transition-colors"
                style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
              >
                nw21010@gmail.com
              </a>
            </div>
          </div>
          
          <div className="mt-16">
            <p 
              className="text-white"
              style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
            >
              Follow the light.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
