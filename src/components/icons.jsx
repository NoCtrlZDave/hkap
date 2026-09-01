export default function Icon({ name, size = 22 }) {
  const paths = {
    pin: (
      <>
        <path
          d="M12 21s-7-5.2-7-11a7 7 0 1114 0c0 5.8-7 11-7 11z"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="none"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
      </>
    ),
    phone: (
      <path
        d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
    ),
    mail: (
      <path
        d="M4 6h16v12H4z"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
    ),
    hash: (
      <>
        <path d="M9 3L7 21M17 3l-2 18M4 9h16M3 15h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    arrow: (
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
    check: (
      <path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
    chevL: (
      <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
    chevR: (
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
    up: (
      <path d="M12 19V5M6 11l6-6 6 6" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4V8h4v1.5A6 6 0 0116 8z" fill="currentColor" />
        <rect x="2" y="9" width="4" height="12" fill="currentColor" />
        <circle cx="4" cy="4" r="2" fill="currentColor" />
      </>
    ),
    facebook: (
      <path
        d="M13 22v-8h2.7l.4-3H13V9.2c0-.9.3-1.5 1.6-1.5h1.7V5.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H7v3h3v8h3z"
        fill="currentColor"
      />
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="17.2" cy="6.8" r="1.3" fill="currentColor" />
      </>
    ),
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[name] || null}
    </svg>
  )
}