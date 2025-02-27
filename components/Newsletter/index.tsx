'use client'
import { Anton } from 'next/font/google'
import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import axios from 'axios'

const anton = Anton({ weight: '400', subsets: ['latin'] })

const POSTS_QUERY = gql`
  query {
    page(id: "cG9zdDoxODQ=") {
      newsletter {
        mainheading
        mainsubheading
        leftheading
        leftsubheading
      }
    }
  }
`

export default function Newsletter() {
  const { loading, error, data } = useQuery(POSTS_QUERY)
  const [formData, setFormData] = useState({ input_3: '', input_8: '' ,input_4: 'Newsletter Form' })
  const [message, setMessage] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [Submittingg, setSubmittingg] = useState(false)
  // Handler to manage form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault() // Prevent the default form submission behavior
    setSubmittingg(true);
    // Basic validation to ensure fields are not empty
    if (!formData.input_3 || !formData.input_8) {
      setMessage('Name and email are required.')
      return
    }

    try {
      const response = await axios.post(
        'https://backend.citiesprojectglobal.com/wp-json/gf/v2/forms/1/submissions',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${btoa(
              'ck_3b900686e6b6f05a64b49ff09163b1ae35017710:cs_a366847ab722d30837123aac4605cc07c1eeaac1',
            )}`, // Basic Auth with API Key and Secret
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

  // Conditional rendering of loading or error states
  if (loading) {
    return (
      <div className="container mx-auto max-w-[1280px]">
        <p className="text-center text-white">Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto max-w-[1280px]">
        <p className="text-center text-white">Error: {error.message}</p>
      </div>
    )
  }

  return (
    <div className="lg:container container-fluid mx-auto max-w-[1480px]" id="newsletter">
      <div className="md:flex lg:flex-row md:flex-col w-[100%] mx-auto bg-[#000000] p-5">
        <div className="md:w-full lg:w-6/12 md:p-30">
          <h3
            className={`${anton.className} lg:max-w-[444px] uppercase text-center md:text-left md:text-[55px] text-[41px] text-white font-light leading-[60px]`}
          >
            {data.page.newsletter.mainheading}
          </h3>
          <p className="lg:max-w-[370px] text-white md:pt-[25px] md:text-[22px] text-center md:text-left">
            {data.page.newsletter.mainsubheading}
          </p>
        </div>
        <div className="md:w-full lg:w-6/12 md:p-15 p-5 xl:border-l xl:border-[#dbdbdb78]">
          <p className="text-white pb-[20px] text-center md:text-left font-extrabold text-[24px]">
            {data.page.newsletter.leftheading}
            <br />
            <span className="text-center md:text-left font-normal text-[#A1CF5F]">
              {data.page.newsletter.leftsubheading}
            </span>
          </p>
          {!submitted ? (
            // Conditionally render form or message
            <form onSubmit={handleSubmit} className="cst_form grid gap-[1px]">
              <input
                type="text"
                name="input_8"
                placeholder="Name"
                value={formData.input_8}
                onChange={handleChange}
                className="bg-transparent border border-[#f6f6f626] p-[10px]"
                required
              />
              <br />
              <input
                type="email"
                name="input_3"
                placeholder="Email"
                value={formData.input_3}
                onChange={handleChange}
                className="bg-transparent border border-[#f6f6f626] p-[10px]"
                required
              />
              <label className="text-[16px] text-white pt-10 font-normal text-left decoration-slice">
                Please Confirm *
              </label>
              <p className="text-[15px] p-2 font-normal text-left decoration-slice">
                <input type="checkbox" className="me-3" required /> I want to subscribe to all CPG emails
              </p>
              <button
                type="submit"
                className={`${Submittingg ? 'bg-gray-500' : 'bg-green-500'} mx-auto mt-4 font-bold md:mx-0 md:w-max  max-w-[106.57px] bg-[#A1CF5F] md:p-[8px] p-[10px] text-black rounded-[7px] text-[16px] `}
                disabled={Submittingg}>
                {Submittingg ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          ) : (
            <div className=" py-10">
              <h3 className="font-bold text-[24px] text-white">Thanks for subscribing!</h3>
              <p className="text-white text-[16px]">We appreciate your interest and will keep you updated.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
