import { ErrorActionLink, ErrorRoom } from '@/components/home/error-room'

export default function NotFound() {
  return (
    <ErrorRoom
      title="This shelf is empty"
      actions={<ErrorActionLink href="/" label="Go home" />}
    >
      <p>We couldn&apos;t find that page. It may have been moved, or it never lived here.</p>
    </ErrorRoom>
  )
}
