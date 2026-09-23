import Link from 'next/link'

const footerSitemap = [
  { label: 'Home', href: '/' },
  { label: 'Store', href: '/store' },
  { label: 'Resources', href: '/resources' },
  { label: 'Coaching', href: '/coaching' },
  { label: 'EDS', href: '/eds' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/about#contact' },
]

export const LivingRoom = () => {
  return (
    <section className="relative overflow-x-hidden">
      <div className="wood-floor relative px-2 pb-24 pt-16 sm:px-4 sm:pb-28 sm:pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-room-wall to-transparent" />

        <div className="relative mx-auto flex w-full max-w-6xl items-end justify-center">
          <JarShelves side="left" shelves={leftJarSets} />
          <SideTable side="left" />

          <div className="relative min-w-0 flex-[2] px-1 sm:px-3">
            <CouchIllustration />
            <div className="gold-table absolute bottom-[7%] left-1/2 z-20 w-[min(18rem,42vw)] -translate-x-1/2 [font-size:clamp(0.45rem,2.6vw,1rem)]">
              <GoldTable />
            </div>
          </div>

          <SideTable side="right" />
          <JarShelves side="right" shelves={rightJarSets} />
        </div>

        <p className="relative z-10 mt-8 text-center font-script text-3xl text-room-gold drop-shadow sm:mt-10 sm:text-5xl">
          thanks for visiting the apothecary!
        </p>

        <nav
          aria-label="Footer sitemap"
          className="relative z-10 mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-x-0 gap-y-2 px-3 text-center font-display text-lg text-room-gold sm:mt-6 sm:text-xl"
        >
          {footerSitemap.map((link, index) => (
            <span key={link.href} className="inline-flex items-center">
              {index > 0 ? (
                <span className="mx-2.5 text-room-gold" aria-hidden="true">
                  •
                </span>
              ) : null}
              <Link
                href={link.href}
                className="underline decoration-room-gold/70 underline-offset-4 transition hover:text-[#ffe08a]"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </section>
  )
}

const CouchIllustration = () => {
  return (
    <svg
      viewBox="0 0 1100 430"
      className="w-full"
      role="img"
      aria-label="A teal three-seater couch"
    >
      <ellipse cx="550" cy="406" rx="420" ry="18" fill="rgba(0,0,0,0.32)" />
      <path
        d="M150 88 C150 50 186 32 240 32 L860 32 C914 32 950 50 950 88 L950 176 L150 176 Z"
        fill="#0e5a51"
      />
      <path
        d="M172 46 C220 38 260 36 300 36 L800 36 C860 36 928 48 928 86 L928 166 L172 166 Z"
        fill="#136F63"
      />
      <path d="M58 128 C58 76 110 60 168 60 L192 60 L192 262 C86 262 58 214 58 174 Z" fill="#0f5c53" />
      <path d="M1042 128 C1042 76 990 60 932 60 L908 60 L908 262 C1014 262 1042 214 1042 174 Z" fill="#0f5c53" />
      <rect x="168" y="174" width="764" height="94" rx="10" fill="#0c4a43" />
      <rect x="186" y="148" width="230" height="100" rx="18" fill="#1a8a7a" />
      <rect x="428" y="144" width="244" height="104" rx="18" fill="#178174" />
      <rect x="684" y="148" width="230" height="100" rx="18" fill="#1a8a7a" />
      <rect x="202" y="166" width="198" height="66" rx="12" fill="#136F63" />
      <rect x="448" y="164" width="204" height="68" rx="12" fill="#0f5c53" />
      <rect x="700" y="166" width="198" height="66" rx="12" fill="#136F63" />
      <path d="M416 152 L416 248" stroke="#0a3f3a" strokeWidth="8" strokeLinecap="round" />
      <path d="M672 152 L672 248" stroke="#0a3f3a" strokeWidth="8" strokeLinecap="round" />
      <rect x="156" y="262" width="788" height="32" rx="6" fill="#0a3f3a" />
      <rect x="210" y="294" width="16" height="54" rx="3" fill="#FFC857" />
      <rect x="360" y="294" width="16" height="54" rx="3" fill="#FFC857" />
      <rect x="510" y="294" width="16" height="54" rx="3" fill="#FFC857" />
      <rect x="660" y="294" width="16" height="54" rx="3" fill="#FFC857" />
      <rect x="810" y="294" width="16" height="54" rx="3" fill="#FFC857" />
      <rect x="920" y="294" width="16" height="54" rx="3" fill="#FFC857" />
    </svg>
  )
}

const leftJarSets: JarSpec[][] = [
  [
    { size: 'md', tint: 'rgba(19, 111, 99, 0.32)' },
    { size: 'tall', tint: 'rgba(196, 146, 44, 0.24)' },
    { size: 'sm', tint: 'rgba(245, 169, 184, 0.28)' },
    { size: 'md', tint: 'rgba(47, 122, 110, 0.3)' },
  ],
  [
    { size: 'sm', tint: 'rgba(91, 206, 250, 0.22)' },
    { size: 'md', tint: 'rgba(133, 106, 93, 0.28)' },
    { size: 'tall', tint: 'rgba(15, 92, 83, 0.3)' },
    { size: 'md', tint: 'rgba(232, 180, 74, 0.22)' },
  ],
]

const rightJarSets: JarSpec[][] = [
  [
    { size: 'tall', tint: 'rgba(15, 92, 83, 0.3)' },
    { size: 'md', tint: 'rgba(245, 169, 184, 0.26)' },
    { size: 'sm', tint: 'rgba(196, 146, 44, 0.24)' },
    { size: 'md', tint: 'rgba(91, 206, 250, 0.22)' },
  ],
  [
    { size: 'md', tint: 'rgba(47, 122, 110, 0.3)' },
    { size: 'sm', tint: 'rgba(232, 180, 74, 0.22)' },
    { size: 'tall', tint: 'rgba(133, 106, 93, 0.26)' },
    { size: 'md', tint: 'rgba(19, 111, 99, 0.32)' },
  ],
]

const JarShelves = ({
  side,
  shelves,
}: {
  side: 'left' | 'right'
  shelves: JarSpec[][]
}) => {
  const sideClass = side === 'left' ? 'mr-1 sm:mr-3' : 'ml-1 sm:ml-3'

  return (
    <div
      className={`relative z-10 mb-20 flex w-[5.4rem] shrink-0 flex-col gap-5 sm:mb-24 sm:w-40 sm:gap-7 ${sideClass}`}
      role="img"
      aria-label="Two black floating shelves of clear apothecary jars with gold lids"
    >
      {shelves.map((jars, shelfIndex) => (
        <Shelf key={shelfIndex} jars={jars} />
      ))}
    </div>
  )
}

interface JarSpec {
  size: 'sm' | 'md' | 'tall'
  tint: string
}

const Shelf = ({ jars }: { jars: JarSpec[] }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-end justify-center gap-1 px-1 pb-0.5 sm:gap-1.5 sm:px-2">
        {jars.map((jar, index) => (
          <Jar key={`${jar.size}-${jar.tint}-${index}`} size={jar.size} tint={jar.tint} />
        ))}
      </div>
      <div className="h-2 rounded-[2px] bg-gradient-to-b from-[#2a2a2a] via-black to-[#111] shadow-[0_8px_12px_rgba(0,0,0,0.4)] ring-1 ring-black sm:h-2.5" />
      <div className="mx-auto h-[3px] w-[94%] bg-[#0a0a0a]" />
    </div>
  )
}

const Jar = ({ size, tint }: JarSpec) => {
  const sizeClass = {
    sm: 'h-9 w-[1.15rem] sm:h-11 sm:w-6',
    md: 'h-11 w-[1.3rem] sm:h-14 sm:w-7',
    tall: 'h-12 w-[1.2rem] sm:h-16 sm:w-6',
  }[size]

  return (
    <div className={`relative flex ${sizeClass} flex-col items-center`}>
      <div className="z-10 h-1.5 w-[88%] rounded-sm bg-gradient-to-r from-[#c4922c] via-room-gold to-[#e8b44a] ring-1 ring-[#8a6a1a] sm:h-2" />
      <div className="h-1 w-full rounded-sm bg-[#b8862b]" />
      <div
        className="relative min-h-0 w-[78%] flex-1 overflow-hidden rounded-b-[5px] border border-white/55 shadow-[inset_0_0_10px_rgba(255,255,255,0.28),0_2px_4px_rgba(0,0,0,0.18)]"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.42) 0%, rgba(210,228,232,0.14) 38%, rgba(255,255,255,0.2) 100%)',
        }}
      >
        <span
          className="absolute inset-x-[12%] bottom-[8%] top-[48%] rounded-b-sm"
          style={{ background: tint }}
          aria-hidden="true"
        />
        <span className="absolute left-[16%] top-[12%] h-[70%] w-[18%] rounded-full bg-white/40" aria-hidden="true" />
        <span className="absolute left-1/2 top-[36%] h-[26%] w-[72%] -translate-x-1/2 rounded-[2px] bg-[#f7f0e6] shadow-sm ring-1 ring-black/10" />
      </div>
    </div>
  )
}

const SideTable = ({ side }: { side: 'left' | 'right' }) => {
  const tuckClass = side === 'left' ? '-mr-2 sm:-mr-4' : '-ml-2 sm:-ml-4'

  return (
    <div
      className={`relative z-10 mb-1 flex w-[4.8rem] shrink-0 flex-col items-center sm:mb-2 sm:w-28 ${tuckClass}`}
    >
      <div className="relative w-full">
        <div className="absolute left-1/2 top-[18%] z-0 h-2.5 w-[4.4rem] -translate-x-1/2 rounded-sm bg-gradient-to-r from-[#c4922c] via-room-gold to-[#c4922c] shadow-md ring-1 ring-[#8a6a1a] sm:h-3 sm:w-24" />
        <div className="absolute left-1/2 top-[calc(18%+10px)] z-0 flex w-12 -translate-x-1/2 justify-between sm:w-16">
          <div className="h-10 w-1 origin-top -rotate-6 bg-gradient-to-b from-room-gold to-[#8a6a1a] sm:h-12 sm:w-1.5" />
          <div className="h-10 w-1 origin-top rotate-6 bg-gradient-to-b from-room-gold to-[#8a6a1a] sm:h-12 sm:w-1.5" />
        </div>
        <HangingPothos flip={side === 'right'} />
      </div>
    </div>
  )
}

const HangingPothos = ({ flip }: { flip: boolean }) => {
  return (
    <svg
      viewBox="0 0 130 320"
      className={`relative z-20 h-36 w-full overflow-visible sm:h-48 ${flip ? '-scale-x-100' : ''}`}
      aria-hidden="true"
    >
      <path d="M44 36 L86 36 L94 62 L36 62 Z" fill="#856A5D" />
      <path d="M48 32 L82 32 L86 36 L44 36 Z" fill="#6a564a" />

      <path d="M62 62 C54 88 36 112 18 138" fill="none" stroke="#0f4f45" strokeWidth="2" strokeLinecap="round" />
      <path d="M64 62 C72 92 90 118 108 142" fill="none" stroke="#136F63" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M60 64 C48 108 28 150 14 198" fill="none" stroke="#1a8f7c" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M66 64 C78 110 98 156 118 214" fill="none" stroke="#0f5c53" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M58 66 C46 120 22 176 8 252" fill="none" stroke="#0f4f45" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M68 66 C86 128 108 188 124 278" fill="none" stroke="#136F63" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M61 68 C52 130 38 186 24 246" fill="none" stroke="#1a8f7c" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M65 70 C74 140 88 200 96 268" fill="none" stroke="#0f5c53" strokeWidth="1.5" strokeLinecap="round" />

      <g className="origin-[40px_40px] animate-leaf-sway">
        <ellipse cx="38" cy="38" rx="13" ry="9" fill="#1a8f7c" transform="rotate(-26 38 38)" />
      </g>
      <g className="origin-[90px_38px] animate-leaf-sway" style={{ animationDelay: '0.5s' }}>
        <ellipse cx="92" cy="36" rx="12" ry="8" fill="#136F63" transform="rotate(24 92 36)" />
      </g>
      <g className="origin-[64px_52px] animate-leaf-sway" style={{ animationDelay: '1s' }}>
        <ellipse cx="64" cy="50" rx="11" ry="7" fill="#0f5c53" transform="rotate(4 64 50)" />
      </g>
      <g className="origin-[18px_138px] animate-leaf-sway" style={{ animationDelay: '0.2s' }}>
        <ellipse cx="16" cy="136" rx="11" ry="8" fill="#136F63" transform="rotate(-36 16 136)" />
      </g>
      <g className="origin-[108px_142px] animate-leaf-sway" style={{ animationDelay: '1.4s' }}>
        <ellipse cx="110" cy="140" rx="11" ry="7" fill="#1a8f7c" transform="rotate(30 110 140)" />
      </g>
      <g className="origin-[36px_112px] animate-leaf-sway" style={{ animationDelay: '0.8s' }}>
        <ellipse cx="34" cy="110" rx="10" ry="7" fill="#2db39a" transform="rotate(-22 34 110)" />
      </g>
      <g className="origin-[90px_118px] animate-leaf-sway" style={{ animationDelay: '1.7s' }}>
        <ellipse cx="92" cy="116" rx="10" ry="7" fill="#0f5c53" transform="rotate(18 92 116)" />
      </g>
      <g className="origin-[14px_198px] animate-leaf-sway" style={{ animationDelay: '0.4s' }}>
        <ellipse cx="12" cy="196" rx="11" ry="8" fill="#0f5c53" transform="rotate(-28 12 196)" />
      </g>
      <g className="origin-[118px_214px] animate-leaf-sway" style={{ animationDelay: '1.2s' }}>
        <ellipse cx="120" cy="212" rx="11" ry="7" fill="#136F63" transform="rotate(34 120 212)" />
      </g>
      <g className="origin-[8px_252px] animate-leaf-sway" style={{ animationDelay: '2s' }}>
        <ellipse cx="10" cy="250" rx="10" ry="7" fill="#1a8f7c" transform="rotate(-16 10 250)" />
      </g>
      <g className="origin-[124px_278px] animate-leaf-sway" style={{ animationDelay: '0.9s' }}>
        <ellipse cx="122" cy="276" rx="10" ry="7" fill="#0f5c53" transform="rotate(26 122 276)" />
      </g>
      <g className="origin-[24px_246px] animate-leaf-sway" style={{ animationDelay: '1.6s' }}>
        <ellipse cx="22" cy="244" rx="10" ry="7" fill="#136F63" transform="rotate(-20 22 244)" />
      </g>
      <g className="origin-[96px_268px] animate-leaf-sway" style={{ animationDelay: '0.3s' }}>
        <ellipse cx="98" cy="266" rx="10" ry="6" fill="#1a8f7c" transform="rotate(22 98 266)" />
      </g>
      <g className="origin-[28px_150px] animate-leaf-sway" style={{ animationDelay: '2.1s' }}>
        <ellipse cx="26" cy="148" rx="9" ry="6" fill="#2db39a" transform="rotate(-40 26 148)" />
      </g>
      <g className="origin-[98px_156px] animate-leaf-sway" style={{ animationDelay: '1.1s' }}>
        <ellipse cx="100" cy="154" rx="9" ry="6" fill="#136F63" transform="rotate(28 100 154)" />
      </g>
      <g className="origin-[22px_176px] animate-leaf-sway" style={{ animationDelay: '0.6s' }}>
        <ellipse cx="20" cy="174" rx="9" ry="6" fill="#0f5c53" transform="rotate(-32 20 174)" />
      </g>
      <g className="origin-[88px_200px] animate-leaf-sway" style={{ animationDelay: '1.9s' }}>
        <ellipse cx="90" cy="198" rx="9" ry="6" fill="#1a8f7c" transform="rotate(16 90 198)" />
      </g>
      <g className="origin-[38px_186px] animate-leaf-sway" style={{ animationDelay: '0.1s' }}>
        <ellipse cx="36" cy="184" rx="8" ry="6" fill="#136F63" transform="rotate(-14 36 184)" />
      </g>
      <g className="origin-[74px_140px] animate-leaf-sway" style={{ animationDelay: '1.5s' }}>
        <ellipse cx="76" cy="138" rx="8" ry="5" fill="#2db39a" transform="rotate(10 76 138)" />
      </g>
    </svg>
  )
}

const GoldTable = () => {
  return (
    <div className="relative">
      <div className="mb-[0.25em] flex items-end justify-center gap-[0.75em] sm:gap-[1.25em]">
        <Candle wax="#F5A9B8" glow="bg-[#F5A9B8]/60" />
        <Candle wax="#F7F1E4" glow="bg-white/70" />
        <Candle wax="#5BCEFA" glow="bg-[#5BCEFA]/60" />
        <div className="ml-[1em] sm:ml-[2em]">
          <Incense />
        </div>
      </div>
      <div className="h-[0.875em] rounded-full bg-gradient-to-r from-[#c4922c] via-room-gold to-[#c4922c] shadow-[0_10px_18px_rgba(0,0,0,0.4)] ring-1 ring-[#8a6a1a]" />
      <div className="mx-auto h-[0.5em] w-[90%] -translate-y-px rounded-b-full bg-[#b8862b]" />
      <div className="flex justify-between px-[12%]">
        <div className="h-[3em] w-[0.375em] origin-top -rotate-6 bg-gradient-to-b from-room-gold to-[#8a6a1a]" />
        <div className="h-[3em] w-[0.375em] origin-top rotate-6 bg-gradient-to-b from-room-gold to-[#8a6a1a]" />
      </div>
    </div>
  )
}

const Candle = ({ wax, glow }: { wax: string; glow: string }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div
        className={`absolute -top-[1.5em] left-1/2 h-[2.5em] w-[2.5em] -translate-x-1/2 rounded-full blur-md animate-glow ${glow}`}
      />
      <div className="relative z-10 h-[1.5em] w-[0.875em] origin-bottom rounded-full bg-gradient-to-t from-orange-600 via-yellow-300 to-white animate-flicker" />
      <div
        className="h-[4em] w-[1.25em] rounded-sm shadow-inner"
        style={{
          background: `linear-gradient(to bottom, ${wax}, color-mix(in srgb, ${wax} 70%, #856A5D))`,
        }}
      />
      <div className="h-[0.5em] w-[1.75em] rounded-sm bg-room-gold" />
    </div>
  )
}

const Incense = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative h-[5em] w-[3em]">
        <SmokeWisp delay="0s" drift="-0.2em" />
        <SmokeWisp delay="1.1s" drift="0.45em" />
        <SmokeWisp delay="2.2s" drift="0em" />
        <SmokeWisp delay="3.3s" drift="-0.4em" />
        <div className="absolute bottom-0 left-1/2 h-[4.6em] w-[0.2em] origin-bottom -translate-x-1/2 -rotate-[12deg] bg-gradient-to-t from-[#4a3428] via-room-brown to-[#d7c09a]">
          <span className="absolute -top-[0.125em] left-1/2 h-[0.5em] w-[0.5em] -translate-x-1/2 rounded-full bg-orange-300 shadow-[0_0_8px_rgba(255,200,87,0.9)]" />
        </div>
      </div>
      <div className="h-[0.625em] w-[3em] rounded-full bg-gradient-to-b from-room-brown to-[#5c4639]" />
    </div>
  )
}

const SmokeWisp = ({ delay, drift }: { delay: string; drift: string }) => {
  return (
    <span
      className="absolute bottom-[4em] left-1/2 h-[4em] w-[1.75em] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.65),rgba(232,220,200,0.15)_70%,transparent_80%)] blur-[2px] animate-smoke-wisp"
      style={{ animationDelay: delay, marginLeft: drift }}
      aria-hidden="true"
    />
  )
}
