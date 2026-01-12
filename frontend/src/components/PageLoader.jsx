import { useEffect, useState } from 'react'
import Loading from './Loading'

function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading size="xl" fullScreen={true} />
  }

  return null
}

export default PageLoader

