import type { ReactNode } from 'react'
import { RoomLink } from '@/components/home/room-link'

const headingScrollClass = 'scroll-mt-[12.5rem] sm:scroll-mt-[15rem]'

const completeGuidePhrases = [
  'The Complete Charlotte / NC Resource Guide',
  'the Complete Charlotte / NC Resource Guide',
  'The Complete Charlotte Resource Guide',
  'the Complete Charlotte Resource Guide',
  'The Complete Local Resource Guide',
  'the Complete Local Resource Guide',
  'The complete directory',
  'the complete directory',
  'The complete guide',
  'the complete guide',
]

export const LinkedGuideText = ({ text }: { text: string }) => {
  const nodes: ReactNode[] = []
  let remaining = text
  let key = 0

  while (remaining.length > 0) {
    let earliest = -1
    let match = ''

    completeGuidePhrases.forEach((phrase) => {
      const foundAt = remaining.indexOf(phrase)
      if (foundAt !== -1 && (earliest === -1 || foundAt < earliest)) {
        earliest = foundAt
        match = phrase
      }
    })

    if (earliest === -1) {
      nodes.push(remaining)
      break
    }

    if (earliest > 0) {
      nodes.push(remaining.slice(0, earliest))
    }

    nodes.push(
      <RoomLink key={key} href="/charlotte#complete-directory">
        {match}
      </RoomLink>
    )
    key += 1
    remaining = remaining.slice(earliest + match.length)
  }

  return nodes
}

export interface DirectoryTopic {
  id: string
  label: string
}

export const CompleteDirectory = ({ topics }: { topics: DirectoryTopic[] }) => {
  return (
    <section
      id="complete-directory"
      className={`space-y-4 border-t border-room-brown/30 pt-8 ${headingScrollClass}`}
    >
      <h2 className="font-display text-3xl text-room-teal sm:text-4xl">
        Looking for something specific?
      </h2>
      <p>
        Jump to a topic, or keep reading. Each section collects the organizations, programs, and
        notes that belong together.
      </p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {topics.map((topic) => (
          <li key={topic.id}>
            <a
              href={`#${topic.id}`}
              className="font-display text-lg text-black underline decoration-room-gold underline-offset-4 transition hover:text-room-teal"
            >
              {topic.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export const isShortListItem = ({ text }: { text: string }) => {
  if (!text) {
    return false
  }

  if (text === '⸻' || text.endsWith(':')) {
    return false
  }

  if (/^\[.+\]$/.test(text)) {
    return false
  }

  const words = text.split(/\s+/).length
  if (words > 16 || text.length > 120) {
    return false
  }

  return true
}

export const TopicBulletList = ({ items }: { items: string[] }) => {
  return (
    <ul className="guide-list guide-list-columns">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export const ResourceListing = ({
  name,
  href,
  description,
}: {
  name: string
  href?: string
  description: string[]
}) => {
  return (
    <article className="rounded-md border border-room-brown/20 bg-[#efe6d6]/70 px-4 py-4">
      <p>
        {href ? (
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="font-display text-xl font-bold text-black underline decoration-room-gold underline-offset-4 transition hover:text-room-teal"
          >
            {name}
          </a>
        ) : (
          <span className="font-display text-xl font-bold text-black">{name}</span>
        )}
      </p>
      {description.length > 0 ? (
        <div className="mt-2 space-y-3 text-base leading-relaxed text-black/80">
          <ResourceDescription paragraphs={description} />
        </div>
      ) : null}
    </article>
  )
}

const ResourceDescription = ({ paragraphs }: { paragraphs: string[] }) => {
  const nodes: ReactNode[] = []
  let index = 0

  while (index < paragraphs.length) {
    const paragraph = paragraphs[index]
    if (paragraph.endsWith(':')) {
      const items: string[] = []
      let cursor = index + 1

      while (cursor < paragraphs.length && isShortListItem({ text: paragraphs[cursor] })) {
        items.push(paragraphs[cursor])
        cursor += 1
      }

      if (items.length >= 2) {
        nodes.push(
          <p key={`${paragraph}-${index}`}>
            <LinkedGuideText text={paragraph} />
          </p>
        )
        nodes.push(<TopicBulletList key={`${paragraph}-list-${index}`} items={items} />)
        index = cursor
        continue
      }
    }

    nodes.push(
      <p key={`${paragraph}-${index}`}>
        <LinkedGuideText text={paragraph} />
      </p>
    )
    index += 1
  }

  return nodes
}

export const TopicHeading = ({
  text,
  id,
}: {
  text: string
  id?: string
}) => {
  return (
    <h2
      id={id}
      className={`mt-8 font-display text-2xl text-room-teal sm:text-3xl ${id ? headingScrollClass : ''}`}
    >
      {text}
    </h2>
  )
}
