'use client'

import { useState } from 'react'

const MAIL_TO = 'quinndelafleur@gmail.com'

export const ContactForm = ({ subject = 'A note from the gallery' }: { subject?: string }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async ({ event }: { event: React.FormEvent<HTMLFormElement> }) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (!name || !email || !message) {
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${MAIL_TO}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Unable to send the note')
      }

      form.reset()
      setStatus('sent')
    } catch (error) {
      console.error(error)
      const subject = encodeURIComponent(`A note from ${name}`)
      const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)
      window.location.href = `mailto:${MAIL_TO}?subject=${subject}&body=${body}`
      setStatus('idle')
    }
  }

  if (status === 'sent') {
    return (
      <p className="rounded-md border border-room-gold bg-room-teal/10 px-4 py-6 text-center font-gallery text-xl text-room-teal">
        Thanks — your note is on its way.
      </p>
    )
  }

  return (
    <form
      onSubmit={(event) => {
        void handleSubmit({ event })
      }}
      className="space-y-5"
    >
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <label className="block">
        <span className="mb-1.5 block font-display text-sm uppercase tracking-wide text-room-brown">
          Name
        </span>
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          className="w-full rounded-md border border-room-brown/40 bg-white/80 px-3 py-2 text-black outline-none ring-room-gold focus:ring-2"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block font-display text-sm uppercase tracking-wide text-room-brown">
          Email
        </span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className="w-full rounded-md border border-room-brown/40 bg-white/80 px-3 py-2 text-black outline-none ring-room-gold focus:ring-2"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block font-display text-sm uppercase tracking-wide text-room-brown">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full resize-y rounded-md border border-room-brown/40 bg-white/80 px-3 py-2 text-black outline-none ring-room-gold focus:ring-2"
        />
      </label>

      {status === 'error' ? (
        <p className="text-sm text-red-800">Please fill in every field before sending.</p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="site-btn site-btn-md disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send a note'}
      </button>
    </form>
  )
}
