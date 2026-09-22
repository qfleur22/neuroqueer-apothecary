import { RoomPage } from '@/components/home/room-page'

const actionClassName =
  'inline-flex items-center justify-center rounded-full border-2 border-room-gold bg-room-teal px-6 py-3 text-center font-display text-base text-room-gold shadow-md transition hover:bg-[#0f5c53] sm:text-lg'

export const ErrorRoom = ({
  title,
  children,
  actions,
}: {
  title: string
  children: React.ReactNode
  actions: React.ReactNode
}) => {
  return (
    <RoomPage>
      <article className="mx-auto flex max-w-xl flex-col items-center px-4 py-14 sm:px-8">
        <div className="ornate-gold w-full p-3">
          <div className="bg-[#f7f0e6] px-6 py-10 text-center sm:px-10">
            <h1 className="mb-4 font-display text-4xl text-room-teal sm:text-5xl">{title}</h1>
            <div className="space-y-4 font-gallery text-lg leading-relaxed text-black">{children}</div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {actions}
            </div>
            <SpilledLavenderJar />
          </div>
        </div>
      </article>
    </RoomPage>
  )
}

export const ErrorActionLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <a href={href} className={actionClassName}>
      {label}
    </a>
  )
}

export const ErrorActionButton = ({
  label,
  onClick,
}: {
  label: string
  onClick: () => void
}) => {
  return (
    <button type="button" onClick={onClick} className={actionClassName}>
      {label}
    </button>
  )
}

const SpilledLavenderJar = () => {
  return (
    <div
      className="relative mx-auto mt-10 h-32 w-60 sm:h-36 sm:w-72"
      role="img"
      aria-label="A toppled clear apothecary jar with lavender buds spilled beside it"
    >
      <div className="absolute left-8 top-[58%] h-28 w-12 -translate-y-1/2 rotate-[128deg] sm:left-10 sm:h-32 sm:w-14">
        <div className="flex h-full w-full flex-col items-center">
          <div className="h-1.5 w-[70%] rounded-sm bg-[#b8862b] sm:h-2" />
          <div
            className="relative min-h-0 w-[78%] flex-1 overflow-hidden rounded-b-[6px] border border-white/55 shadow-[inset_0_0_10px_rgba(255,255,255,0.28),0_2px_4px_rgba(0,0,0,0.18)]"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,255,255,0.42) 0%, rgba(210,228,232,0.14) 38%, rgba(255,255,255,0.2) 100%)',
            }}
          >
            <span
              className="absolute inset-x-[12%] bottom-[8%] top-[42%] rounded-b-sm bg-[rgba(176,142,196,0.4)]"
              aria-hidden="true"
            />
            <span
              className="absolute left-[16%] top-[12%] h-[70%] w-[18%] rounded-full bg-white/40"
              aria-hidden="true"
            />
            <span className="absolute left-1/2 top-[36%] h-[26%] w-[72%] -translate-x-1/2 rounded-[2px] bg-[#f7f0e6] shadow-sm ring-1 ring-black/10" />
          </div>
        </div>
      </div>

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 288 144" aria-hidden="true">
        <ellipse cx="132" cy="126" rx="68" ry="7" fill="rgba(0,0,0,0.1)" />
        <LavenderBud x={148} y={94} rotate={-16} scale={1.05} />
        <LavenderBud x={160} y={104} rotate={20} scale={0.96} />
        <LavenderBud x={172} y={92} rotate={-8} scale={1.1} />
        <LavenderBud x={182} y={108} rotate={24} scale={0.9} />
        <LavenderBud x={194} y={98} rotate={-22} scale={0.98} />
        <LavenderBud x={156} y={116} rotate={34} scale={0.74} />
        <LavenderBud x={176} y={118} rotate={-28} scale={0.76} />
        <LavenderBud x={190} y={116} rotate={16} scale={0.7} />
        <LavenderBud x={142} y={108} rotate={10} scale={0.78} />
        <LavenderBud x={166} y={122} rotate={-12} scale={0.66} />
      </svg>
    </div>
  )
}

const LavenderBud = ({
  x,
  y,
  rotate,
  scale,
}: {
  x: number
  y: number
  rotate: number
  scale: number
}) => {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path d="M0 8 C0 12 1.4 14 0 16" fill="none" stroke="#4a7a52" strokeWidth="1.1" strokeLinecap="round" />
      <ellipse cx="-2.2" cy="2.4" rx="3.1" ry="5.2" fill="#9b7bb8" transform="rotate(-18)" />
      <ellipse cx="2.4" cy="2.8" rx="3" ry="5" fill="#7d5a9a" transform="rotate(16)" />
      <ellipse cx="0" cy="0" rx="3.4" ry="5.8" fill="#c4a8d8" />
      <ellipse cx="0.6" cy="-1.4" rx="1.1" ry="2" fill="#e6d4f0" />
      <ellipse cx="0" cy="7.4" rx="2.2" ry="1.6" fill="#6b8f62" />
    </g>
  )
}
