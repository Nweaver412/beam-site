import warpLogo from './assets/warp_logo_copyright.jpg'

interface WarpLogoProps {
  size?: 'small' | 'medium' | 'large'
}

// Warp Logo Component
const WarpLogo = ({ size = 'medium' }: WarpLogoProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-24 h-24 md:w-32 md:h-32'
      case 'large':
        return 'w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'
      case 'medium':
      default:
        return 'w-48 h-48 md:w-56 md:h-56'
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <img 
        src={warpLogo} 
        alt="WARP Logo" 
        className={`${getSizeClasses()} object-contain`}
      />
    </div>
  )
}

export default WarpLogo
