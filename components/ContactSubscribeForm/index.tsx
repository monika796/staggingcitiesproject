'use client'
import { useState } from 'react'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'

const SubscriptionForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    input_1: '', // Name
    input_3: '', // Email
    input_5: '', // Company
    input_6: '', // Position
    input_7: '', // Message
    subscribe: false, // Checkbox
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!recaptchaToken) {
      setMessage('Please complete the reCAPTCHA.')
      return
    }

    try {
      const response = await axios.post('/api/submit-form', {
        ...formData,
        recaptcha_token: recaptchaToken,
      })

      if (response.data.success) {
        setMessage('Form submitted successfully!')
        setSubmitted(true)
      } else {
        setMessage(response.data.message || 'Submission error.')
      }
    } catch (error) {
      setMessage('Submission failed.')
      console.error(error)
    }
  }

  return (
    <div>
      {submitted ? (
        <div className="text-center py-10">
          <h3 className="font-bold text-[24px] text-black">Thanks for subscribing!</h3>
          <p className="text-black text-[16px]">We appreciate your interest and will keep you updated.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-2">
          <label className="text-black font-bold">Name</label>
          <input type="text" name="input_1" placeholder="Enter Name" value={formData.input_1} onChange={handleChange} className="border p-2" required />

          <label className="text-black font-bold">Email</label>
          <input type="email" name="input_3" placeholder="Enter Email" value={formData.input_3} onChange={handleChange} className="border p-2" required />

          <label className="text-black font-bold">Company</label>
          <input type="text" name="input_5" placeholder="Enter Company" value={formData.input_5} onChange={handleChange} className="border p-2" required />

          <label className="text-black font-bold">Position</label>
          <input type="text" name="input_6" placeholder="Enter Position" value={formData.input_6} onChange={handleChange} className="border p-2" required />

          <label className="text-black font-bold">Message</label>
          <input type="text" name="input_7" placeholder="Enter Message" value={formData.input_7} onChange={handleChange} className="border p-2" />

          <label className="text-black font-bold">
            <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleChange} /> I want to subscribe to emails
          </label>

          {/* Google reCAPTCHA v2 Checkbox */}
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
            onChange={handleRecaptchaChange}
          />

          <button type="submit" className="bg-green-500 text-white p-2 rounded">Submit</button>
        </form>
      )}
      {message && <p className="text-red-500">{message}</p>}
    </div>
  )
}

export default SubscriptionForm
