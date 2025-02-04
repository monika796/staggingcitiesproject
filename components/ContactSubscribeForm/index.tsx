'use client'
import client from '@/apollo-client'
import { useState } from 'react'
import axios from 'axios'

const SubscriptionForm = () => {
  // State to handle form submission
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  // State to store form data
  const [formData, setFormData] = useState({
    input_2: '',
    input_3: '',
    input_1: '',
    input_4: '',
    input_6: '',
    input_5: '',
    input_7: '',
    subscribe: false, // Checkbox state
  })

  // Handle form field changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    // Here, you could call an API or send the form data as needed.
    // For now, we'll simulate the form submission.
    try {
      const response = await axios.post(
        'https://backend.citiesprojectglobal.com/wp-json/gf/v2/forms/3/submissions',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${btoa(
              'ck_3b900686e6b6f05a64b49ff09163b1ae35017710:cs_a366847ab722d30837123aac4605cc07c1eeaac1',
            )}`, 
          },
        },
      )

      const responseData = response.data

      if (!responseData.is_valid) {
        // If the form submission is not valid, show the validation messages
        const validationMessages = Object.values(responseData.validation_messages).join(', ')
        setMessage(validationMessages || 'There was an error submitting the form.')
      } else {
        // If the submission is valid, show a success message
        setMessage('Form submitted successfully!')
      }

      setSubmitted(true) // Set the form as submitted
    } catch (error) {
      setMessage('There was an error submitting the form.')
      console.error(error)
    }
  }

  return (
    <div className="">
      {submitted ? (
        <div className="text-center py-10">
          <h3 className="font-bold text-[24px] text-black">Thanks for subscribing!</h3>
          <p className="text-black text-[16px]">We appreciate your interest and will keep you updated.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-[1px]">
          <label className='text-black font-bold' >Name</label>
          <input
            type="text"
            name="input_1"
            placeholder="Enter Name"
            value={formData.input_1}
            onChange={handleChange}
            className="bg-transparent border border-[#3d3c3c26] p-[10px]"
            required
          />
          <label className='text-black font-bold'>Email</label>
          <input
            type="email"
            name="input_3"
            placeholder="Enter Email"
            value={formData.input_3}
            onChange={handleChange}
            className="bg-transparent border border-[#3d3c3c26] p-[10px]"
            required
          />
          <label className='text-black font-bold'>Company</label>
          <input type='text' name='input_5' placeholder='Enter Company' onChange={handleChange} value={formData.input_5} className='bg-transparent border border-[#3d3c3c26] p-[10px]' required />
          
          <label className='text-black font-bold'>Position</label>
          <input type='text' name='input_6' placeholder='Enter Position'  onChange={handleChange} value={formData.input_6} className='bg-transparent border border-[#3d3c3c26] p-[10px]' required />
          
          <label className='text-black font-bold'>Enter  Message</label>
          <input type='text'  className='bg-transparent border border-[#3d3c3c26] p-[10px]' name='input_7' onChange={handleChange} value={formData.input_7} />
         
          <label className="text-[20] text-black pt-8  font-normal text-left decoration-slice">
            Please Confirm*
          </label>
          <p className="text-[15px] p-2 font-normal text-left decoration-slice">
            <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleChange} />I want to
            subscribe to all CPG emails
          </p>
          <button
            type="submit"
            className="mx-auto md:mx-0 font-bold md:w-[31%] w-[28%] bg-[#A1CF5F] md:p-[8px] p-[10px] text-black rounded-[7px] text-[15px]"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  )
}

export default SubscriptionForm
