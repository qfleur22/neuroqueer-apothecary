import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { ApothecaryExplore } from '@/components/home/apothecary-explore'
import { ContactMethods } from '@/components/home/contact-methods'
import { ContactForm } from '@/components/home/contact-form'

export const metadata: Metadata = {
  title: 'About',
  description:
    'The Neuroqueer Apothecary is a collection of resources, tools, and peer coaching by Quinn Fleur.',
}

export default function AboutPage() {
  return (
    <RoomPage>
      <WallCard title="The Neuroqueer Apothecary" wide>
        <p>
          The Neuroqueer Apothecary is a collection of resources, tools, and peer coaching by Quinn
          Fleur, built for those of us living in the messy intersections of transness,
          neurodivergence, disability, hypermobility, and chronic illness. It grew out of a simple
          reality: a surprising number of us keep finding each other. The trans person who
          discovers they&apos;re autistic, then realizes their lifelong &ldquo;weird
          flexibility&rdquo; might be{' '}
          <RoomLink href="/eds">Ehlers-Danlos syndrome</RoomLink>, then starts asking questions
          about POTS, MCAS, ME/CFS, chronic pain, IBS, MALS, or the dozen other conditions that
          seem to travel alongside us. Our bodies may be complicated, but we aren&apos;t isolated
          anomalies. There are patterns here—and there is knowledge in our communities about how
          to survive them.
        </p>
        <p>
          I&apos;m Quinn Fleur: a late-diagnosed AuDHDer, trans man, disabled person, and EDSer who
          has spent years learning how to navigate systems that rarely understand bodies like mine
          as a whole. The Neuroqueer Apothecary comes from the belief that lived experience is
          knowledge, disabled people are experts in our own bodies, and information should not be
          locked behind wealth, institutional language, or the luck of finding the one practitioner
          who happens to understand your particular constellation of conditions. Our communities
          have always taught one another how to survive systems that weren&apos;t designed with us
          in mind. This project is one small extension of that tradition.
        </p>
        <p>
          The Apothecary isn&apos;t here to sell you a cure or promise that I&apos;ve cracked the
          code to your body. It&apos;s here to help you build a map. Through affordable{' '}
          <RoomLink href="/store">resource guides</RoomLink> and peer coaching, I can help you
          recognize patterns, find language for experiences you&apos;ve struggled to describe,
          prepare for medical appointments, locate research and{' '}
          <RoomLink href="/resources">resources</RoomLink>, explore accommodations and management
          strategies, and figure out which questions might actually be worth asking next. Sometimes
          fifteen minutes with someone who already speaks the language can save months of wandering
          through disconnected specialists, inaccessible research, and endless search results.
        </p>
        <p>
          This is community knowledge, not gatekeeping; harm reduction, not perfection;
          self-advocacy, not medical obedience. The goal is not to replace your doctors or tell you
          what treatment you need. It&apos;s to make sure you don&apos;t have to walk into those
          rooms empty-handed. I want you to leave the Neuroqueer Apothecary with more language,
          more options, better questions, practical tools, and a stronger sense of where to go
          next. Because navigating a neuroqueer, disabled, chronically ill life is hard enough. We
          shouldn&apos;t all have to reinvent the map alone.
        </p>

        <ApothecaryExplore />

        <section id="quinn" className="scroll-mt-[12.5rem] space-y-5 border-t border-room-brown/30 pt-8 sm:scroll-mt-[15rem]">
          <h2 className="font-display text-3xl text-room-teal sm:text-4xl">About me</h2>
          <div className="relative mx-auto h-64 w-48 overflow-hidden ornate-gold p-2 sm:h-80 sm:w-60">
            <img
              src="/gallery/quinn-portrait.png"
              alt="Portrait of Quinn Fleur"
              className="h-full w-full object-cover object-[center_20%]"
            />
          </div>
          <p>
            Hi, I&apos;m Quinten Thistle Fleur, also known as Quinn. I&apos;m a 30-year-old web
            developer, activist, and doer of things. I&apos;ve found that I consistently send people
            resources and things and wanted to have them all in one place for ease of access.
            I&apos;m a polyamorous, non-binary, trans man,{' '}
            <RoomLink href="/drag">drag king</RoomLink>, food insecurity and disability
            advocate. I spend a lot of my time in my garden, cooking and distributing meals and
            groceries to my neighbors and friends, making bad art and shitty poetry, and spending
            time with my friends, ESA (Chloe) and my girlfriend{' '}
            <RoomLink href="/evie">Evie</RoomLink>.
          </p>
          <p>
            My aesthetic is solar-punk whimsy witch. I like gaming,{' '}
            <RoomLink href="/anime">anime</RoomLink>, researching and collecting{' '}
            <RoomLink href="/resources">resources</RoomLink>, science fiction, and working on my
            battle jackets.
          </p>
          <p>
            I also spend a lot of time working on my mental health and trauma. I have developed a
            flow chart site for{' '}
            <RoomLink href="https://dbt.quinnfleur.com">DBT skills</RoomLink> that helps the user
            navigate through skills when they&apos;re in crisis. I spend a lot of time working on
            these skills, optimizing life for my AuDHD brain and shadow work, which I try to share
            with my friends and community.
          </p>
          <p>
            I have <RoomLink href="/eds">Ehlers-Danlos Syndrome</RoomLink> and a variety of
            co-occurring conditions which may have me using different accommodations like a cane or
            wheelchair depending on the day. I have done a lot of research on my conditions and
            like sharing that knowledge with others. To that end, I have created a{' '}
            <RoomLink href="/resources">resources</RoomLink> page that I update regularly with my
            findings.
          </p>
        </section>

        <section id="contact" className="scroll-mt-[12.5rem] space-y-5 border-t border-room-brown/30 pt-8 sm:scroll-mt-[15rem]">
          <h2 className="font-display text-3xl text-room-teal sm:text-4xl">
            Want to get in touch with me?
          </h2>
          <p>
            You can reach me through any of these, or send a note with
            the form below, which lands in my inbox at quinndelafleur@gmail.com.
          </p>
          <ContactMethods />
          <div className="border-t border-room-brown/30 pt-6">
            <h3 className="mb-4 font-display text-2xl text-room-teal">Leave a note</h3>
            <ContactForm />
          </div>
        </section>
      </WallCard>
    </RoomPage>
  )
}
