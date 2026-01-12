import { useScrollAnimation } from '../hooks/useScrollAnimation'

function AnimatedSection({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '',
  ...props 
}) {
  const [ref, isVisible] = useScrollAnimation({ once: true })

  const animationClasses = {
    'fade-up': 'scroll-animate',
    'fade-left': 'scroll-animate-left',
    'fade-right': 'scroll-animate-right',
    'scale': 'scroll-animate-scale',
  }

  const baseClass = animationClasses[animation] || 'scroll-animate'

  return (
    <div
      ref={ref}
      className={`${baseClass} ${isVisible ? 'animate' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  )
}

export default AnimatedSection

