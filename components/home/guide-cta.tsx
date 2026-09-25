export const GuideCta = ({
  href,
  label,
  isDominant = false,
}: {
  href: string
  label: string
  isDominant?: boolean
}) => {
  const isRemote = href.startsWith('http') || href.startsWith('mailto:')

  return (
    <p className="text-center">
      <a
        href={href}
        target={isRemote ? '_blank' : undefined}
        rel={isRemote ? 'noopener noreferrer' : undefined}
        className={`site-btn ${isDominant ? 'site-btn-lg' : 'site-btn-md'}`}
      >
        {label}
      </a>
    </p>
  )
}
