import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { GuideCta } from '@/components/home/guide-cta'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import {
  CompleteDirectory,
  ResourceListing,
  TopicBulletList,
  LinkedGuideText,
  isShortListItem,
} from '@/components/home/charlotte-guide'
import { charlotteGroups } from '@/data/charlotte-resources'

export const metadata: Metadata = {
  title: 'Resources in Charlotte & North Carolina',
  description:
    'Healthcare, food, housing, transition support, legal help, community, mutual aid, and where to start in Charlotte & NC.',
}

const CONTACT_HREF = '/about#contact'

const linkMap: Record<string, { href: string; isDominant?: boolean }> = {
  'Change Your Name in North Carolina': { href: '/charlotte#name-change' },
  'Find Food Pantries & Free Food in Charlotte': { href: '/charlotte#food' },
  'Open the Complete Charlotte Resource Guide': {
    href: '/charlotte#complete-directory',
    isDominant: true,
  },
  'Visit Charlotte Trans Health': { href: 'https://charlottetranshealth.org/' },
  'Find Food in Charlotte': { href: '/charlotte#food' },
  'Check Nourish Up Locations': { href: 'https://www.nourishup.org/' },
  'Open the Charlotte Food Pantry Guide': { href: '/charlotte#food' },
  'Explore Trans in the South': { href: 'https://southernequality.org/transinthesouth/' },
  'Explore NC Trans Youth Resources': { href: 'https://southernequality.org/nc/' },
  'Open the NC Name Change Guide': { href: '/charlotte#name-change' },
  'Explore Crisis Assistance Ministry': { href: 'https://www.crisisassistance.org/' },
  'See Clothing & Mutual Aid Resources': { href: '/charlotte#clothing' },
  'See Reproductive Health Resources': { href: '/charlotte#reproductive-health' },
  'See Disability & Accessibility Resources': { href: '/charlotte#disability-accessibility' },
  'Find Queer Community in Charlotte': { href: '/charlotte#queer-community' },
  'Browse Queer-Friendly Charlotte Businesses': {
    href: '/charlotte#friendly-businesses',
  },
  'Browse the Full Resource Directory': { href: '/charlotte#complete-directory' },
  'Work With Quinn': { href: CONTACT_HREF },
  'Explore Resource Navigation With Quinn': { href: CONTACT_HREF },
  'Suggest a Resource or Correction': { href: CONTACT_HREF },
  'Open the Charlotte Food Guide': { href: '/charlotte#food' },
  'Open the Complete Local Resource Guide': { href: '/charlotte#complete-directory' },
  'NC Name Change Guide': { href: '/charlotte#name-change' },
  'Go to the NC Name Change Guide': { href: '/charlotte#name-change' },
  'Charlotte Food Pantry Guide': { href: '/charlotte#food' },
  'Complete Charlotte / NC Resource Guide': { href: '/charlotte#complete-directory' },
}

const sectionIdByHeading: Record<string, string> = {
  'Start Here': 'start-here',
  'Need Food?': 'food',
  'Need Trans-Friendly Healthcare?': 'healthcare',
  'Need Help Paying for Transition?': 'transition-funding',
  'Trans Youth & Families in North Carolina': 'trans-youth',
  'Changing Your Name in North Carolina?': 'name-change',
  'Free Name Change Help': 'name-change-help',
  'Need Rent or Utility Help?': 'rent-utility',
  'Need Free Clothing or Household Items?': 'clothing',
  'LGBTQ+ Youth & Young Adults': 'youth',
  'Reproductive Healthcare & Abortion Support': 'reproductive-health',
  'HIV Testing, Prevention & Support': 'hiv',
  'Harm Reduction': 'harm-reduction',
  'Disability Resources': 'disability-accessibility',
  'Need Money for Something That Isn’t Healthcare?': 'funding',
  'I Just Want Queer Friends': 'queer-community',
  'Looking for a Trans-Friendly Business?': 'friendly-businesses',
  'Looking for Gender-Affirming Care Providers?': 'providers',
  'National Resources Worth Knowing About': 'national',
}

const directoryHeadingIds = new Set([
  'food',
  'healthcare',
  'transition-funding',
  'trans-youth',
  'name-change',
  'rent-utility',
  'clothing',
  'youth',
  'reproductive-health',
  'hiv',
  'harm-reduction',
  'disability-accessibility',
  'funding',
  'queer-community',
  'friendly-businesses',
  'providers',
  'national',
])

const directoryTopics = Object.entries(sectionIdByHeading)
  .filter(([, id]) => {
    return directoryHeadingIds.has(id)
  })
  .map(([label, id]) => ({ label, id }))

const extraResourceLinks: Record<string, string> = {
  'NC 211': 'https://nc211.org/',
  'Charlotte Trans Health PATH':
    'https://charlottetranshealth.org/providing-access-to-trans-healthcare-path/',
  'Crisis Assistance Ministry Free Store': 'https://www.crisisassistance.org/',
  'Youth Crisis Center': 'https://www.therelatives.org/',
  'On Ramp Resource Center': 'https://www.therelatives.org/',
  Housing: 'https://www.therelatives.org/',
  'Charlotte Trans Health + Carolinas LGBT+ Chamber': 'https://charlottetranshealth.org/',
  'Charlotte Food Pantry & Free Food Guide': '/charlotte#food',
  'North Carolina Name Change Guide': '/charlotte#name-change',
  'The Complete Charlotte / NC Resource Guide': '/charlotte#complete-directory',
}

const extraResourceNames = [
  'T4TCLT',
  'Queer Clothing Swaps',
  'North Carolina Bar Foundation LGBTQ+ Legal Clinics',
  'Transition Funding',
  'Southern Trans Resources',
  'Youth Support',
  'Gender-Affirming Clothing',
  'Surgery Research',
  'Coming Out',
  'Trans Education',
  'Mutual Aid',
]

const resourceLinks = new Map<string, string>()
const resourceNames = new Set<string>()

charlotteGroups.forEach((group) => {
  group.items.forEach((item) => {
    resourceNames.add(item.name)
    if (item.href) {
      resourceLinks.set(item.name, item.href)
    }
  })
})

Object.entries(extraResourceLinks).forEach(([name, href]) => {
  resourceNames.add(name)
  resourceLinks.set(name, href)
})

extraResourceNames.forEach((name) => {
  resourceNames.add(name)
})

const CHARLOTTE_COPY = `
Compiled by Quinn Fleur

Finding help shouldn’t require knowing the exact name of the organization that helps with the problem you have.

Unfortunately, that’s often how resource navigation works.

You need help paying for HRT, but you don’t know there’s a program for that.

You need groceries, but you don’t know which pantry lets you choose your own food.

You want to legally change your name, but you have no idea which forms North Carolina wants.

You need rent assistance.

A binder.

A queer doctor.

A support group.

An abortion fund.

A place to get tested.

A trans-friendly hair stylist.

A youth housing program.

A community where you can meet another queer person without downloading another dating app.

So I started collecting the answers.

This is Quinn’s hub for Charlotte, Mecklenburg County, and North Carolina resources, with an emphasis on resources useful to queer and trans people, disabled and neurodivergent people, low-income community members, and anyone trying to navigate systems that are significantly more complicated than they need to be.

Looking for something specific?

[Change Your Name in North Carolina →]

[Find Food Pantries & Free Food in Charlotte →]

[Open the Complete Charlotte Resource Guide →]

⸻

Start Here

If you have absolutely no idea which organization you need, that’s okay.

A few good starting points are:

Charlotte Trans Health

For trans and gender-diverse people in the Charlotte region, Charlotte Trans Health is one of the best first places to check for gender-affirming healthcare and resource navigation.

Their Providing Access to Trans Healthcare — PATH program serves eligible transgender and gender-diverse people throughout the Charlotte metro area, including Mecklenburg and several surrounding NC and SC counties. Current PATH services include case management, therapy, group therapy, short-term psychiatry support, limited prescription assistance, connections to affirming medical care, and connections to food, financial, and social resources. (Charlotte Trans Health)

Good place to start if you need:

Trans-friendly healthcare

Help figuring out where to go

Mental-health support

Help accessing gender-affirming care

Resource navigation

Financial assistance related to healthcare

[Visit Charlotte Trans Health →]

⸻

NC 211

When you know the problem but not the organization, 211 is a general resource-navigation service that can help connect people with community resources.

Think:

Housing • Food • Utilities • Healthcare • Crisis services • Transportation • Family support • Financial assistance

If the rest of this page has you thinking:

“Okay, but none of those are my problem.”

211 is a reasonable next place to look.

⸻

Need Food?

You have options.

And because food access is its own enormous topic, I’ve made a separate guide specifically for it.

Charlotte Food Pantry & Free Food Guide

The food-resource page covers places to look for:

Food pantries

Free groceries

Produce

Community food distributions

Prepared meals

Low-barrier food access

Delivery options where available

Mutual-aid food resources

[Find Food in Charlotte →]

⸻

Nourish Up

Formerly known as Loaves & Fishes/Friendship Trays, Nourish Up operates food-access programs in the Charlotte area.

They maintain multiple pantry locations, and Spanish-language assistance is available through the organization. Their current contact information includes a dedicated Spanish-support email, and their site maintains updated pantry locations and hours. (Nourish Up)

If you need groceries, this is one of the major Charlotte resources worth checking early.

[Check Nourish Up Locations →]

⸻

The Bulb

The Bulb operates community-based produce rescue and free-market programs around Charlotte.

This can be especially useful if you’re looking for fresh food outside of a traditional pantry model.

Availability and market schedules can change, so check current information before heading out.

⸻

Food Not Bombs

Charlotte-area Food Not Bombs distributions can also be a source of free food and community support.

Because volunteer-led distributions can change locations, frequency, or timing, check the current local information before going.

Want all the food resources in one place?

[Open the Charlotte Food Pantry Guide →]

⸻

Need Trans-Friendly Healthcare?

Start with:

Charlotte Trans Health

In addition to PATH, Charlotte Trans Health maintains connections to gender-affirming providers and community health resources.

PATH currently supports eligible people across the Charlotte metro area—including Mecklenburg, Cabarrus, Gaston, Iredell, Lincoln, Rowan, and Union counties in North Carolina, plus Chester, Lancaster, and York counties in South Carolina. (Charlotte Trans Health)

⸻

Trans in the South

The Campaign for Southern Equality’s Trans in the South Guide maintains a regional directory of trans-friendly medical providers, counselors, HIV/AIDS services, attorneys, and other resources throughout the South. (Campaign for Southern Equality)

This can be especially useful if:

Charlotte doesn’t have the specialist you need.

You live elsewhere in North Carolina.

You’re willing to travel.

You’re trying to find an affirming provider in another Southern state.

[Explore Trans in the South →]

⸻

Need Help Paying for Transition?

There are both local and national options worth checking.

Charlotte Trans Health PATH

PATH can provide financial assistance and care navigation for eligible transgender and gender-diverse people in the Charlotte metro area who are uninsured or underinsured. (Charlotte Trans Health)

Point of Pride

Point of Pride currently operates several national programs, including:

Annual Transgender Surgery Fund

HRT Access Fund

Electrolysis Support Fund

Thrive Fund

Free chest binders

Free femme shapewear

Their programs have different eligibility requirements and application cycles, so check the current program status before applying. (Point of Pride)

⸻

Trans Youth & Families in North Carolina

The Campaign for Southern Equality’s Trans Youth Emergency Project provides support to families navigating restrictions on gender-affirming healthcare.

For affected families in North Carolina, the program currently offers individual navigation support and renewable travel grants to help families access care. (Campaign for Southern Equality)

[Explore NC Trans Youth Resources →]

⸻

Changing Your Name in North Carolina?

You get your own page.

Because this process deserves more explanation than:

“Go to the courthouse. Good luck.”

North Carolina Name Change Guide

The dedicated page walks through resources for:

Understanding the NC legal-name-change process

Finding current forms and instructions

Name-change clinics

Updating identification

Finding legal assistance

Gender-marker resources

Creating a checklist of everywhere your name needs to be updated

[Open the NC Name Change Guide →]

⸻

Free Name Change Help

There are also organizations offering assistance.

North Carolina Bar Foundation LGBTQ+ Legal Clinics

The North Carolina Bar Foundation’s LGBTQ+ Legal Clinic program supports transgender North Carolinians with legal-name-change paperwork and has involved attorneys, paralegals, and law students in helping participants understand and prepare required filings. (North Carolina Bar Foundation)

Charlotte Trans Health + Carolinas LGBT+ Chamber

Charlotte Trans Health and the Carolinas LGBT+ Chamber also host name-change programming.

As of September 2026, they have a free Charlotte clinic scheduled for September 9, 2026, covering the North Carolina process and giving participants an opportunity to begin paperwork. Because clinics are date-specific, always check their current calendars rather than assuming a past session is still available. (Charlotte Trans Health)

Legal Aid of North Carolina

Legal Aid NC provides free civil legal assistance to eligible North Carolinians and operates a Charlotte office. Its current statewide civil legal helpline is 1-866-219-LANC (5262), and applications can also be started online through JusticeHub. (Legal Aid of North Carolina)

Want the whole process laid out?

[Go to the NC Name Change Guide →]

⸻

Need Rent or Utility Help?

Crisis Assistance Ministry

Crisis Assistance Ministry serves Mecklenburg County residents facing financial crisis.

Current services include:

Short-term emergency rent assistance

Utility assistance

Free clothing

Free household goods

Financial coaching

Their Free Store provides clothing, shoes, and household essentials free of charge to Mecklenburg County residents, with no income qualification required for the store itself. (Crisis Assistance Ministry)

[Explore Crisis Assistance Ministry →]

⸻

Need Free Clothing or Household Items?

You have several kinds of options in Charlotte.

Crisis Assistance Ministry Free Store

The Free Store currently offers clothing, shoes, household items, and other essentials free to Mecklenburg County residents. Walk-ins are currently welcome during posted shopping hours. (Crisis Assistance Ministry)

Queer Clothing Swaps

Charlotte also has community-run clothing swaps and queer clothing exchanges.

These can be particularly useful if you’re:

Transitioning.

Changing presentation.

Trying new sizes.

Looking for gender-affirming clothing without spending hundreds of dollars.

Trying to find somewhere your old clothes can immediately become somebody else’s gender euphoria.

The Complete Charlotte Resource Guide keeps a larger list of current queer swaps and community clothing resources.

[See Clothing & Mutual Aid Resources →]

⸻

LGBTQ+ Youth & Young Adults

Time Out Youth

Time Out Youth is one of Charlotte’s major LGBTQ+ youth organizations, with programming and support for queer and trans young people.

Check their current programming directly for eligibility, drop-in opportunities, support groups, and available assistance.

The Relatives

The Relatives supports children, teens, and young adults experiencing crisis or instability.

Their programs currently include:

Youth Crisis Center

A 24-hour program for youth ages 7–17, including emergency shelter and crisis support. (The Relatives)

On Ramp Resource Center

A drop-in resource center for young adults ages 16–24 offering case management and help with employment, education, housing, and independent-living needs. (The Relatives)

Housing

Their housing program supports young adults ages 18–24 who are at risk of or experiencing homelessness or fleeing domestic violence, combining scattered-site housing with case-management support. (The Relatives)

⸻

Reproductive Healthcare & Abortion Support

Charlotte for Choice

Charlotte for Choice is a local reproductive-rights organization providing education, resources, clinic support, and reproductive-health assistance.

Their work includes clinic escorts and defenders, reproductive-health supplies, patient assistance, and abortion-related support. (Charlotte for Choice)

Carolina Abortion Fund

The Carolina Abortion Fund provides financial assistance to eligible people who live in North or South Carolina or who are receiving abortion care in the Carolinas.

Funding availability varies, and they may not be able to cover the entire cost of care, but they can also connect callers with additional funding resources. (Carolina Abortion Fund)

The Complete Local Resource Guide also includes additional reproductive-health navigation and support organizations.

[See Reproductive Health Resources →]

⸻

HIV Testing, Prevention & Support

Charlotte has organizations providing combinations of:

HIV testing

PrEP navigation

Education

Case management

Housing support

Treatment navigation

Community support

Resources to check include RAIN and Carolinas CARE Partnership, along with providers listed through Charlotte Trans Health and the Trans in the South directory.

Because program eligibility and services can change, use the Complete Local Resource Guide as the starting directory and then confirm current services directly with the provider.

⸻

Harm Reduction

Charlotte also has community organizations focused on reducing harm rather than punishing people for substance use.

These resources may provide combinations of:

Safer-use supplies

Syringe access

Overdose-prevention resources

Naloxone

Community support

Clothing and basic-needs resources

Connections to treatment when wanted

See the Complete Charlotte Resource Guide for current harm-reduction organizations and contact information.

⸻

Disability Resources

The directory also includes organizations focused on:

Disability advocacy

Independent living

Youth mentorship

Transit navigation

Accessibility

Sensory-friendly community activities

Disability rights

Charlotte-specific resources worth exploring include organizations such as Disability Rights & Resources and community projects such as AccessCLT.

[See Disability & Accessibility Resources →]

⸻

Need Money for Something That Isn’t Healthcare?

The complete directory includes local and national programs that may assist with:

Food

Healthcare

Transportation

Transition costs

Emergency expenses

Mutual aid

Legal-document expenses

Gender-affirming supplies

Travel for care

Possible resources include local LGBTQ+ hardship programs, mutual-aid groups, and national organizations such as Point of Pride.

Funding programs open and close frequently.

Don’t assume a grant listed six months ago is still accepting applications today.

I’ve tried to make the resource guide a place where you can figure out what programs to check, then verify the current funding cycle with the organization.

⸻

I Just Want Queer Friends

A deeply reasonable request.

Charlotte has far more queer social infrastructure than you might realize if your only strategy has been:

Open Instagram → Somehow hear about the event two days after it happened.

The local guide includes options such as:

Trans community groups

Queer mutual aid

Choirs

Bands

Book clubs

Sapphic events

Community picnics

Queer bars

Support groups

Arts events

Discord communities

Volunteer opportunities

Community organizing

[Find Queer Community in Charlotte →]

⸻

T4TCLT

T4TCLT is a Charlotte-based trans community and mutual-aid group.

Depending on current programming, that can include social events, community resources, clothing redistribution, mutual aid, education, and opportunities to connect with other trans people locally.

If what you need is less:

“Please give me another national PDF.”

and more:

“Where are the actual trans people in Charlotte?”

local community groups matter.

⸻

Looking for a Trans-Friendly Business?

The complete guide also includes community-recommended local establishments and service providers across categories such as:

Hair

Barbers and salons

Laser hair removal

Electrolysis

Tattoos

Piercing

Voice training

Clothing

Gyms

Massage

Bars

Churches and faith communities

Healthcare

Gender-affirming surgeons

Fertility care

Because businesses change staff, policies, ownership, pricing, insurance participation, and quality over time, I keep those recommendations in the living directory rather than pretending a static list is permanent.

Always confirm that the specific provider you’re booking with can meet your needs.

[Browse Queer-Friendly Charlotte Businesses →]

⸻

Looking for Gender-Affirming Care Providers?

The Complete Charlotte Resource Guide includes community-collected starting points for:

Primary care

HRT

Gynecology

Fertility

Top surgery

Hysterectomy

Facial feminization

Breast augmentation

Orchiectomy

Vaginoplasty

Voice training

Laser

Electrolysis

For medical providers and surgeons in particular, use these lists as leads, not endorsements.

Before scheduling care, verify:

Current practice location

Insurance

Procedures offered

Eligibility criteria

BMI policies if applicable

Wait times

Licensure

Hospital affiliation

Current patient reviews

and whether the clinician has relevant experience with your specific needs.

⸻

National Resources Worth Knowing About

Even though this page focuses on Charlotte and North Carolina, sometimes the resource you need isn’t local.

The larger guide includes national starting points for:

Transition Funding

Point of Pride and other transition-assistance programs.

Southern Trans Resources

Campaign for Southern Equality.

Youth Support

Trans Youth Emergency Project.

Gender-Affirming Clothing

Free binder and shapewear programs.

Surgery Research

Surgeon directories, community reviews, and patient-result resources.

Coming Out

Guides and educational resources.

Trans Education

Resources about gender dysphoria, transition, terminology, and identity.

Mutual Aid

Programs offering direct support to queer and trans people.

[Browse the Full Resource Directory →]

⸻

Three Guides to Bookmark

Changing Your Name?

North Carolina Name Change Guide

Understand the process, find legal resources and clinics, organize the documents you’ll need, and build your post-name-change checklist.

[Open the NC Name Change Guide →]

⸻

Need Food?

Charlotte Food Pantry & Free Food Guide

Find food pantries, grocery programs, produce distributions, community food resources, and other ways to access food locally.

[Open the Charlotte Food Guide →]

⸻

Need Basically Anything Else?

The Complete Charlotte / NC Resource Guide

The big one.

Organized resources for:

Healthcare • Transition • Housing • Food • Clothing • Legal help • Disability • Reproductive healthcare • Funding • Social groups • Youth • HIV • Harm reduction • Mutual aid • LGBTQ-friendly businesses • National trans resources • Books & education

[Open the Complete Local Resource Guide →]

⸻

Why I Made This

Hi, I’m Quinn Fleur.

I’m trans, queer, neurodivergent, disabled, and based in Charlotte.

One thing I’ve learned from navigating community resources is that:

Resources are only useful if you know they exist.

There are organizations doing incredible work here.

There are grants people don’t know they can apply for.

There are free programs people assume they can’t afford.

There are local queer spaces people don’t discover until they’ve lived here for three years.

There are people Googling:

“trans friendly doctor charlotte nc reddit”

at 1:14 in the morning because nobody ever handed them the list.

I’ve spent years collecting that list.

This resource hub is my attempt to make some of that accumulated community knowledge easier to find.

⸻

This Is a Living Resource

Charlotte changes.

Organizations change.

Programs lose funding.

New programs appear.

Businesses close.

Providers move.

Application requirements change.

Meeting schedules change.

Laws definitely change.

So this directory should be treated as a living starting point, not eternal truth carved into stone.

Last major resource review: September 2026

When timing, eligibility, legal requirements, healthcare services, or funding availability matter, check the organization’s current information before relying on an older listing.

And if you know about:

A resource I missed

A program that closed

A changed eligibility requirement

A new queer-friendly business

A provider people should know about

A broken link

A community group that deserves inclusion

send it my way.

Community knowledge works better when the community helps build it.

[Suggest a Resource or Correction →]

⸻

Need Help Navigating All of This?

Sometimes having a resource directory isn’t the same thing as knowing what to do next.

You might be trying to figure out:

Where can I get gender-affirming care?

What financial assistance should I apply for?

Where can I find food this week?

How do I start my name change?

What resources apply to my age or county?

How do I find queer community?

Which organizations should I contact first?

How do I organize all these applications and appointments?

Quinn’s coaching and resource-navigation services can help you organize options, identify questions to ask, make a plan, and connect with relevant public resources.

This is peer resource navigation—not legal representation, medical care, case management, or a guarantee that a program will accept an application.

[Explore Resource Navigation With Quinn →]

⸻

Charlotte Has Resources. You Shouldn’t Have to Discover All of Them by Accident.

Need paperwork?

[NC Name Change Guide →]

Need groceries?

[Charlotte Food Pantry Guide →]

Need something else?

[Complete Charlotte / NC Resource Guide →]

Need help figuring out which of those fifty-seven links actually applies to you?

[Work With Quinn →]

⸻

Resource Disclaimer

This directory is provided for community education and resource navigation. Inclusion does not necessarily constitute endorsement of every organization, provider, employee, service, treatment, political position, or business listed.

Programs, eligibility criteria, hours, prices, funding, healthcare offerings, staff, and policies can change. Verify important information directly with the organization before traveling, spending money, making medical decisions, or relying on a service.

Medical-provider and surgeon listings are starting points for further research and are not medical recommendations. Legal information is educational and is not legal advice.

Some organizations provide services only to specific counties, ages, identities, income levels, or other populations.

If something is wrong or outdated, please tell me. I’d rather fix the resource than leave somebody with a dead end.
`

const normalizeBracketLabel = (raw: string) => {
  return raw.trim().replace(/→\s*$/, '').trim()
}

type CharlotteBlock =
  | { type: 'directory' }
  | { type: 'heading'; text: string; id?: string }
  | { type: 'cta'; label: string; href: string; isDominant?: boolean }
  | { type: 'resource'; name: string; href?: string; description: string[] }
  | { type: 'bullets'; items: string[] }
  | { type: 'paragraph'; text: string }

type CharlotteGroupedBlock =
  | CharlotteBlock
  | {
      type: 'section'
      text: string
      id?: string
      children: CharlotteBlock[]
    }

const groupCharlotteSections = ({ blocks }: { blocks: CharlotteBlock[] }) => {
  const grouped: CharlotteGroupedBlock[] = []
  let current: Extract<CharlotteGroupedBlock, { type: 'section' }> | null = null

  const flush = () => {
    if (current) {
      grouped.push(current)
      current = null
    }
  }

  blocks.forEach((block) => {
    if (block.type === 'directory') {
      flush()
      grouped.push(block)
      return
    }

    if (block.type === 'heading') {
      flush()
      current = {
        type: 'section',
        text: block.text,
        id: block.id,
        children: [],
      }
      return
    }

    if (current) {
      current.children.push(block)
      return
    }

    grouped.push(block)
  })

  flush()
  return grouped
}

const CharlotteBlockView = ({ block }: { block: CharlotteBlock }) => {
  if (block.type === 'directory') {
    return <CompleteDirectory topics={directoryTopics} />
  }

  if (block.type === 'heading') {
    return null
  }

  if (block.type === 'cta') {
    return (
      <GuideCta
        href={block.href}
        label={`${block.label} →`}
        isDominant={block.isDominant}
      />
    )
  }

  if (block.type === 'resource') {
    return (
      <ResourceListing
        name={block.name}
        href={block.href}
        description={block.description}
      />
    )
  }

  if (block.type === 'bullets') {
    return <TopicBulletList items={block.items} />
  }

  return (
    <p className="whitespace-pre-wrap">
      <LinkedGuideText text={block.text} />
    </p>
  )
}

const parseCharlotteBlocks = ({ paragraphs }: { paragraphs: string[] }) => {
  const blocks: CharlotteBlock[] = []
  const usedHeadingIds = new Set<string>()
  let skipCompleteDirectoryCta = false
  let index = 0

  while (index < paragraphs.length) {
    const paragraph = paragraphs[index].trim()
    index += 1

    if (!paragraph) {
      continue
    }

    if (paragraph === '⸻') {
      skipCompleteDirectoryCta = false
      continue
    }

    if (paragraph === 'Looking for something specific?') {
      blocks.push({ type: 'directory' })
      skipCompleteDirectoryCta = true
      continue
    }

    const bracketMatch = paragraph.match(/^\[(.+)\]$/)
    if (bracketMatch) {
      const label = normalizeBracketLabel(bracketMatch[1])
      const mapped = linkMap[label]
      if (mapped) {
        if (skipCompleteDirectoryCta && mapped.href.includes('#complete-directory')) {
          continue
        }

        blocks.push({
          type: 'cta',
          label,
          href: mapped.href,
          isDominant: mapped.isDominant,
        })
      }
      continue
    }

    const headingId = sectionIdByHeading[paragraph]
    if (headingId) {
      let id: string | undefined
      if (!usedHeadingIds.has(headingId)) {
        usedHeadingIds.add(headingId)
        id = headingId
      }

      blocks.push({ type: 'heading', text: paragraph, id })
      continue
    }

    if (paragraph.endsWith(':')) {
      const items: string[] = []
      let cursor = index

      while (cursor < paragraphs.length) {
        const next = paragraphs[cursor].trim()
        if (!next || next === '⸻' || next.match(/^\[(.+)\]$/) || sectionIdByHeading[next]) {
          break
        }

        if (!isShortListItem({ text: next })) {
          break
        }

        items.push(next)
        cursor += 1
      }

      if (items.length >= 2) {
        blocks.push({ type: 'paragraph', text: paragraph })
        blocks.push({ type: 'bullets', items })
        index = cursor
        continue
      }
    }

    if (resourceNames.has(paragraph)) {
      const description: string[] = []

      while (index < paragraphs.length) {
        const next = paragraphs[index].trim()
        if (
          !next ||
          next === '⸻' ||
          next.match(/^\[(.+)\]$/) ||
          sectionIdByHeading[next] ||
          resourceNames.has(next)
        ) {
          break
        }

        description.push(next)
        index += 1
      }

      blocks.push({
        type: 'resource',
        name: paragraph,
        href: resourceLinks.get(paragraph),
        description,
      })
      continue
    }

    blocks.push({ type: 'paragraph', text: paragraph })
  }

  return blocks
}

export default function CharlottePage() {
  const paragraphs = CHARLOTTE_COPY.trim().split(/\n{2,}/)
  const blocks = groupCharlotteSections({ blocks: parseCharlotteBlocks({ paragraphs }) })

  return (
    <RoomPage>
      <WallCard title="Resources in Charlotte & North Carolina" wide="xl">
        {blocks.map((block, idx) => {
          if (block.type === 'section') {
            return (
              <LearnMoreSection key={`${block.text}-${idx}`} title={block.text} id={block.id}>
                {block.children.map((child, childIdx) => (
                  <CharlotteBlockView key={`${block.text}-${childIdx}`} block={child} />
                ))}
              </LearnMoreSection>
            )
          }

          return <CharlotteBlockView key={`${block.type}-${idx}`} block={block} />
        })}
      </WallCard>
    </RoomPage>
  )
}
