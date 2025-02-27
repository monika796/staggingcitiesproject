'use client'
import { useState } from 'react'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'

const SubscriptionForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    input_8: '', // Name
    input_3: '', // Email
    input_5: '', // Company
    input_6: '', // Position
    input_7: '', // Message
    subscribe: false, // Checkbox
    input_9: 'Not Checked',
  })
  const [formData_newsletter, setFormNewsletterData] = useState({
    input_8: '', // Name
    input_3: '', // Email
    input_4: 'Contact Form',
  })
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value } = event.target
    const isCheckbox = type === "checkbox";
    const checked = isCheckbox ? (event.target as HTMLInputElement).checked : undefined;

    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: type === 'checkbox' ? (event.target as HTMLInputElement).checked : value,
      
    // }))
    setFormData((prevData) => ({
      ...prevData,
      [name]: isCheckbox ? checked : value,
      ...(name === "subscribe" && { input_9: checked ? "Checked" : "Unchecked" }), // Update input_9 when subscribe changes
    }));
  
    
    setFormNewsletterData((prevData) => ({
      ...prevData,
      [name]: value,
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
      console.log(formData.subscribe);
    setLoading(true)

    try {
        if(formData.subscribe == true){
          const response_newsletter = await axios.post(
            'https://backend.citiesprojectglobal.com/wp-json/gf/v2/forms/1/submissions',
            formData_newsletter,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa(
                  'ck_3b900686e6b6f05a64b49ff09163b1ae35017710:cs_a366847ab722d30837123aac4605cc07c1eeaac1',
                )}`, // Basic Auth with API Key and Secret
              },
            },
          )
    
          const responseData_newsletter = response_newsletter.data
    
          if (!responseData_newsletter.is_valid) {
            setMessage(response_newsletter.data.message || 'Submission error.');
            return false;
          }
        }
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
    } finally {
      setLoading(false)
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
          <input type="text" name="input_8" placeholder="Enter Name" value={formData.input_8} onChange={handleChange} className="border p-2" required />

          <label className="text-black font-bold">Email</label>
          <input type="email" name="input_3" placeholder="Enter Email" value={formData.input_3} onChange={handleChange} className="border p-2" required />

          <label className="text-black font-bold">Company</label>
          <input type="text" name="input_5" placeholder="Enter Company" value={formData.input_5} onChange={handleChange} className="border p-2" required />

          <label className="text-black font-bold">Position</label>
          <input type="text" name="input_6" placeholder="Enter Position" value={formData.input_6} onChange={handleChange} className="border p-2" required />

          <label className="text-black font-bold">Message</label>
          <textarea
            name="input_7"
            placeholder="Enter Message"
            value={formData.input_7}
            onChange={handleChange}
            className="border p-2"
          ></textarea>

          <label className="text-black font-bold">
            <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleChange} /> I want to subscribe to emails
          </label>
          
          {/* Google reCAPTCHA v2 Checkbox */}
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
            onChange={handleRecaptchaChange}
          />

          <button type="submit" className={`p-2 rounded ${loading ? 'bg-gray-500' : 'bg-green-500'} text-white`} disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
      {message && <p className="text-red-500">{message}</p>}
    </div>
  )
}

export default SubscriptionForm
