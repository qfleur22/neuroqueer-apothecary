import { LearnMoreSection } from '@/components/home/learn-more-section'
import { siteMapSections } from '@/data/site-map'
import { SiteMapEntry } from '@/models/site-map'

export const SiteMap = () => {
  return (
    <div className="space-y-6">
      <p className="font-gallery text-xl italic text-room-brown">
        Everything in the Apothecary, all in one place.
      </p>
      <p>
        Browse Neuroqueer Apothecary’s guides, tools, quizzes, coaching, workshops, community
        resources, and educational projects below. Open a section to explore everything available in
        that area.
      </p>

      {siteMapSections.map((section) => (
        <LearnMoreSection key={section.id} id={section.id} title={section.title}>
          <div className="space-y-6">
            {section.entries.map((entry) => (
              <SiteMapItem key={`${section.id}-${entry.title}`} entry={entry} />
            ))}
          </div>
        </LearnMoreSection>
      ))}
    </div>
  )
}

const SiteMapItem = ({ entry }: { entry: SiteMapEntry }) => {
  const isRemote = entry.href.startsWith('http')

  return (
    <article>
      <h3 className="font-display text-xl text-black sm:text-2xl">{entry.title}</h3>
      <p className="mt-1.5">{entry.description}</p>
      <p className="mt-2">
        <a
          href={entry.href}
          target={isRemote ? '_blank' : undefined}
          rel={isRemote ? 'noopener noreferrer' : undefined}
          className="font-display text-lg text-room-teal underline decoration-room-gold underline-offset-4 transition hover:text-[#0c4a43]"
        >
          {entry.cta}
        </a>
      </p>
    </article>
  )
}
