export default function Marquee({ items, reverse = false, separator = '✦' }) {
  const doubled = [...items, ...items]
  return (
    <div className={`marquee ${reverse ? 'marquee--reverse' : ''}`}>
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
            <em>{separator}</em>
          </span>
        ))}
      </div>
    </div>
  )
}