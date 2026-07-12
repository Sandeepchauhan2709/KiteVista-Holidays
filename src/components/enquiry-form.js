'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  travelDate: '',
  travellers: '2',
  message: '',
}

export function EnquiryForm({ subject, compact = false }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, subject }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setForm(initialForm)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error.message)
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-secondary p-8 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h3 className="font-serif text-xl font-semibold text-secondary-foreground">
          Enquiry Sent Successfully!
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you for your interest. Our travel expert will call you back within a few hours to
          plan your journey.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className={`grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${compact ? 'c-' : ''}name`} className="text-sm font-medium">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            id={`${compact ? 'c-' : ''}name`}
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${compact ? 'c-' : ''}phone`} className="text-sm font-medium">
            Phone Number <span className="text-destructive">*</span>
          </label>
          <input
            id={`${compact ? 'c-' : ''}phone`}
            name="phone"
            type="tel"
            required
            pattern="[0-9+\-\s]{10,15}"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${compact ? 'c-' : ''}email`} className="text-sm font-medium">
          Email Address <span className="text-destructive">*</span>
        </label>
        <input
          id={`${compact ? 'c-' : ''}email`}
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className={`grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${compact ? 'c-' : ''}travelDate`} className="text-sm font-medium">
            Preferred Travel Date
          </label>
          <input
            id={`${compact ? 'c-' : ''}travelDate`}
            name="travelDate"
            type="date"
            value={form.travelDate}
            onChange={handleChange}
            className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${compact ? 'c-' : ''}travellers`} className="text-sm font-medium">
            Number of Travellers
          </label>
          <select
            id={`${compact ? 'c-' : ''}travellers`}
            name="travellers"
            value={form.travellers}
            onChange={handleChange}
            className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3-5">3 - 5 People</option>
            <option value="6-10">6 - 10 People</option>
            <option value="10+">More than 10</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${compact ? 'c-' : ''}message`} className="text-sm font-medium">
          Your Message
        </label>
        <textarea
          id={`${compact ? 'c-' : ''}message`}
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your travel plans, questions or special requirements..."
          className="resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded-lg bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            Send Enquiry
          </>
        )}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        We respect your privacy. Your details are only used to contact you about this enquiry.
      </p>
    </form>
  )
}
