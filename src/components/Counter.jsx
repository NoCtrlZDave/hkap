import { useEffect, useRef, useState } from 'react'

export default function Counter({ to, suffix = '', decimals = 0, duration = 1800 }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const begin = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - begin) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(to * eased)
            if (progress < 1) requestAnimationFrame(tick)
            else setValue(to)
          }
          requestAnimationFrame(tick)
          io.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])

  const formatted = value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  )
}