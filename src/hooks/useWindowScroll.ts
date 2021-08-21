import { useEffect, useState } from 'react'

export const useWindowScroll = () => {
  const [blackHeader, setBlackHeader] = useState<boolean>(false)

  useEffect(() => {
    const scrollListener = () => {
      setBlackHeader(false)
      if (window.scrollY > 10) setBlackHeader(true)
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return [blackHeader]
}
