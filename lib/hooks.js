import { useState } from 'react'

export const useReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)

  const ref = (node) => {
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Stop observing after reveal
        }
      },
      { threshold },
    )

    observer.observe(node)
  }

  return { ref, isVisible }
}
