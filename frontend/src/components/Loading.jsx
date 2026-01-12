function Loading({ size = 'md', fullScreen = false }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="text-center">
          <div className={`${sizeClasses[size]} mx-auto mb-4 relative`}>
            {/* Spinning Circles */}
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-purple-200 rounded-full"></div>
            <div className="absolute inset-2 border-4 border-transparent border-t-purple-600 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '0.8s'}}></div>
            <div className="absolute inset-4 border-4 border-green-200 rounded-full"></div>
            <div className="absolute inset-4 border-4 border-transparent border-t-green-600 rounded-full animate-spin" style={{animationDuration: '0.6s'}}></div>
          </div>
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizeClasses[size]} relative`}>
        {/* Spinning Circles */}
        <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-purple-200 rounded-full"></div>
        <div className="absolute inset-2 border-4 border-transparent border-t-purple-600 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '0.8s'}}></div>
        <div className="absolute inset-4 border-4 border-green-200 rounded-full"></div>
        <div className="absolute inset-4 border-4 border-transparent border-t-green-600 rounded-full animate-spin" style={{animationDuration: '0.6s'}}></div>
      </div>
    </div>
  )
}

export default Loading

