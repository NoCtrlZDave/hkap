export default function PageHero({ kicker, title, accent, sub, image, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero__media" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="page-hero__veil"></div>
      <div className="container">
        <span className="page-hero__kicker">{kicker}</span>
        <h1 className="page-hero__title">
          {title} {accent && <span className="serif">{accent}</span>}
        </h1>
        {sub && <p className="page-hero__sub">{sub}</p>}
        {children && <div className="page-hero__actions">{children}</div>}
      </div>
    </section>
  )
}