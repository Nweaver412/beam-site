import WarpLogo from '../WarpLogo'

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Logo */}
      <div className="pt-16 pb-8 text-center">
        <WarpLogo />
        <h1 
          className="text-4xl md:text-5xl font-light mt-8 mb-4 text-white"
          style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
        >
          About
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center">
          <p 
            className="text-lg text-white leading-relaxed mb-8"
            style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
          >
            We're a brand built for riders who refuse to blend into the background. 
            Using 3M reflective technology, we create cycling apparel that combines race level performance, 
            comfort, and visibility. 
            Whether you're training before dawn or racing past sunset, 
            our gear is made to keep you illuminated, protected, and confident every mile of the way.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="text-left">
              <h2 
                className="text-2xl font-light mb-6 text-white"
                style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
              >
                Our Mission
              </h2>
              <p 
                className="text-white leading-relaxed"
                style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
              >
                We craft high visibility cycling apparel that turns reflection into protection.
                By merging safety with style, we illuminate the road and every rider on it.
                Because confidence starts with being seen.
              </p>
            </div>
            
            <div className="text-left">
              <h2 
                className="text-2xl font-light mb-6 text-white"
                style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
              >
                Our Vision
              </h2>
              <p 
                className="text-white leading-relaxed"
                style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
              >
                Is to be seen. 
                Where every reflective detail is built to make your ride safer and more visible.
                To live in a world where you don't need a light to be seen,
                but can be the light.
              </p>
            </div>
          </div>
          <p 
            className="text-lg text-white leading-relaxed mb-8 mt-16"
            style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}
          >
            Follow the light.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
