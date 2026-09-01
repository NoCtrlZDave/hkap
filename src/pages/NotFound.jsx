import PageHero from '../components/PageHero.jsx'
import { Link } from 'react-router-dom'
import Icon from '../components/icons.jsx'
import { images } from '../components/assets.js'

export default function NotFound() {
  return (
    <>
      <PageHero
        kicker="404"
        title="Page not"
        accent="found"
        sub="The page you are looking for does not exist or has been moved."
        image={images.hero5}
      >
        <Link className="btn btn--brand" to="/">
          Back to Home
          <span className="btn__ic">
            <Icon name="arrow" size={17} />
          </span>
        </Link>
      </PageHero>
    </>
  )
}