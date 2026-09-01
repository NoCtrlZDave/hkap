import { useEffect, useState } from 'react'
import Icon from './icons.jsx'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#home"
      className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
      aria-label="Back to top"
    >
      <Icon name="up" size={22} />
    </a>
  )
}