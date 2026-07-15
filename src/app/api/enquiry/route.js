import { Resend } from 'resend'

const RESEND_API_KEY = 're_3yzvMhto_CySM2GTeZiWpkXtvYEjArNNc'
const ENQUIRY_FROM_EMAIL = 'sandeepchauhan2709@gmail.com'
const ENQUIRY_TO_EMAIL = 'sandeepchauhan2709@gmail.com'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, travelDate, travellers, message, subject } = body

    // --- Validation ---
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return Response.json({ error: 'Please enter a valid name.' }, { status: 400 })
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }
    if (!phone || !/^[0-9+\-\s]{10,15}$/.test(phone)) {
      return Response.json({ error: 'Please enter a valid phone number.' }, { status: 400 })
    }

    const sanitize = (value) =>
      String(value || '')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .slice(0, 1000)

    const safeName = sanitize(name)
    const safeEmail = sanitize(email)
    const safePhone = sanitize(phone)
    const safeDate = sanitize(travelDate) || 'Not specified'
    const safeTravellers = sanitize(travellers) || 'Not specified'
    const safeMessage = sanitize(message) || 'No message provided'
    const safeSubject = sanitize(subject) || 'General Enquiry'

    if (!process.env.RESEND_API_KEY || !process.env.ENQUIRY_TO_EMAIL || !RESEND_API_KEY) {
      console.log('[v0] Missing RESEND_API_KEY or ENQUIRY_TO_EMAIL environment variable')
      return Response.json(
        { error: 'Enquiry service is not configured yet. Please call us directly.' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
      // Use your verified domain sender once set up, e.g. 'Himalayan Yatra <enquiry@yourdomain.com>'
      from: ENQUIRY_FROM_EMAIL || 'Kitevista Holidays <onboarding@resend.dev>',
      to: ENQUIRY_TO_EMAIL,
      replyTo: safeEmail,
      subject: `New Enquiry: ${safeSubject} — ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #1a4d3e; padding: 24px;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0;">New Tour Enquiry</h1>
            <p style="color: #ffffffcc; font-size: 14px; margin: 8px 0 0;">${safeSubject}</p>
          </div>
          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 10px 0; color: #666; width: 160px; border-bottom: 1px solid #f0f0f0;">Name</td>
                <td style="padding: 10px 0; color: #111; font-weight: bold; border-bottom: 1px solid #f0f0f0;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; border-bottom: 1px solid #f0f0f0;">Phone</td>
                <td style="padding: 10px 0; color: #111; font-weight: bold; border-bottom: 1px solid #f0f0f0;">
                  <a href="tel:${safePhone}" style="color: #1a4d3e;">${safePhone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; border-bottom: 1px solid #f0f0f0;">Email</td>
                <td style="padding: 10px 0; color: #111; font-weight: bold; border-bottom: 1px solid #f0f0f0;">
                  <a href="mailto:${safeEmail}" style="color: #1a4d3e;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; border-bottom: 1px solid #f0f0f0;">Travel Date</td>
                <td style="padding: 10px 0; color: #111; border-bottom: 1px solid #f0f0f0;">${safeDate}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; border-bottom: 1px solid #f0f0f0;">Travellers</td>
                <td style="padding: 10px 0; color: #111; border-bottom: 1px solid #f0f0f0;">${safeTravellers}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <p style="color: #666; font-size: 14px; margin: 0 0 8px;">Message</p>
              <p style="background-color: #f7f7f5; border-radius: 8px; padding: 16px; color: #111; font-size: 14px; line-height: 1.6; margin: 0;">${safeMessage}</p>
            </div>
          </div>
          <div style="background-color: #f7f7f5; padding: 16px 24px;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              Sent from the Himalayan Yatra website enquiry form.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.log('[v0] Resend error:', error)
      return Response.json(
        { error: 'Could not send your enquiry right now. Please call us directly.' },
        { status: 500 }
      )
    }

    return Response.json({ success: true })
  } catch (err) {
    console.log('[v0] Enquiry API error:', err.message)
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
