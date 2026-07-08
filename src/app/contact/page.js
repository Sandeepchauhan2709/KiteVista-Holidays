'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Hook this up to your email service, form backend, or API route later
    setSubmitted(true);
  }

  return (
    <div className="max-w-5xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-12">
      <div>
        <p className="font-mono text-marigold text-xs mb-3">CONTACT</p>
        <h1 className="font-display text-4xl mb-4">Tell us about your yatra.</h1>
        <p className="text-stone mb-8">
          Share your travel dates and group size — we'll reply with a package
          and price within a day.
        </p>

        <div className="space-y-4 text-sm">
          <p className="flex items-center gap-3"><Phone size={18} className="text-marigold" /> +91 98765 43210</p>
          <p className="flex items-center gap-3"><Mail size={18} className="text-marigold" /> hello@kitevistaholidays.com</p>
          <p className="flex items-center gap-3"><MapPin size={18} className="text-marigold" /> Near Har Ki Pauri, Haridwar, Uttarakhand</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-black/5">
        {submitted ? (
          <p className="text-pine font-medium">
            Thanks — your enquiry is in. We'll get back to you shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Full name</label>
              <input required type="text" className="w-full mt-1 border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-marigold" />
            </div>
            <div>
              <label className="text-sm font-medium">Phone number</label>
              <input required type="tel" className="w-full mt-1 border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-marigold" />
            </div>
            <div>
              <label className="text-sm font-medium">Which package?</label>
              <select className="w-full mt-1 border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-marigold">
                <option>Kedarnath Yatra</option>
                <option>Char Dham Yatra</option>
                <option>Badrinath Yatra</option>
                <option>Mussoorie Getaway</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea rows={4} className="w-full mt-1 border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-marigold" />
            </div>
            <button type="submit" className="w-full bg-marigold text-ink py-3 rounded-full font-medium hover:brightness-95 transition">
              Send Enquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}