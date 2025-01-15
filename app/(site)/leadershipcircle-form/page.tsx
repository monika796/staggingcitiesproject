'use client'
import { useState, useEffect } from 'react'
import UserNameEmail from '@/components/multiformstep/Stepfirst'
import DobGender from '@/components/multiformstep/Stepsecond'
import Address from '@/components/multiformstep/Stepthird'
import Image from 'next/image'
import axios from 'axios'

const MainForm = () => {
  const [data, setData] = useState({
    input_5: '', // Email
    input_6: '',
    input_13: '',
    input_14: '',
    input_15: '',
    input_16: '',
    input_17: '',
    input_18: '',
    input_19: '',
    input_20: '',
    input_22: '',
    input_23: '',
    input_25: [],
    input_26: '',
    input_27: '',
    input_28: '',
    input_29: '',
    input_30: '',
    input_31: '',
  })

  const [errors, setErrors] = useState({})
  const [activeTab, setActiveTab] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const validateForm = () => {
    const newErrors = {}
    const currentStepFields = getCurrentStepFields()

    currentStepFields.forEach((field) => {
      const value = data[field.name]
      if (!value || (Array.isArray(value) && value.length === 0)) {
        newErrors[field.name] = `${field.label} is required.`
      } else if (field.name === 'input_5' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        // Email format validation
        newErrors[field.name] = 'Please enter a valid email address.'
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const getCurrentStepFields = () => {
    switch (activeTab) {
      case 0:
        return [{ name: 'input_5', label: 'Email' }]
      case 1:
        return [
          { name: 'input_6', label: 'First Name' },
          { name: 'input_14', label: 'Last Name' },
          { name: 'input_15', label: 'Mobile' },
          { name: 'input_16', label: 'City' },
          { name: 'input_17', label: 'Country' },
          { name: 'input_18', label: 'How did you hear about us?' },
          { name: 'input_19', label: 'Referral info' },
        ]
      case 2:
        return [
          { name: 'input_20', label: 'Why do you want to be part of the cohort?' },
          { name: 'input_22', label: 'Current vocation/occupation' },
          { name: 'input_23', label: 'Leadership roles' },
          { name: 'input_26', label: 'Your calling' },
          { name: 'input_27', label: "How you've engaged your calling" },
          { name: 'input_28', label: 'What is not the way it should be?' },
          { name: 'input_29', label: 'How to be part of the solution?' },
          { name: 'input_30', label: 'Holy Spirit working in your life' },
          { name: 'input_31', label: 'Ability to convene others' },
        ]
      default:
        return []
    }
  }

  const handleNext = () => {
    if (validateForm()) {
      setActiveTab((prev) => prev + 1)
    }
  }

  const handleSubmit = async () => {
    if (!validateForm()) {
      setMessage('Please fill out all fields before submitting.')
      return
    }

    try {
      const response = await axios.post(
        'https://digitractive.com/cityprojectglobal/wp-json/gf/v2/forms/2/submissions',
        data,
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
        const validationMessages = Object.values(responseData.validation_messages).join(', ')
        setMessage(validationMessages || 'There was an error submitting the form.')
      } else {
        setMessage('Form submitted successfully!')
      }

      setSubmitted(true)
    } catch (error) {
      setMessage('There was an error submitting the form.')
      console.error(error)
    }
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        if (activeTab === formElements.length - 1) {
          handleSubmit()
        } else {
          handleNext()
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [activeTab, data])

  const formElements = [
    <UserNameEmail data={data} handleChange={handleChange} errors={errors} />,
    <DobGender data={data} handleChange={handleChange} errors={errors} />,
    <Address data={data} handleChange={handleChange} errors={errors} />,
  ]

  return (
    <div className="container py-10 grid gap-8 md:max-w-[900px] mx-auto">
      <Image src="/www.png" height={1000} width={1000} alt="" className="mx-auto" />
      <div>
        <h2 className="text-[40px] text-[#000000] font-bold">Leadership Circle</h2>
        <br />
        <p className="text-[20px] text-[#000000]">
          Thank you for your interest in participating in the Leadership Circle. Fill out this initial application and
          we will be in contact soon.
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-10">
          <h3 className="font-bold text-[24px] text-black">Thanks for subscribing!</h3>
          <p className="text-black text-[16px]">We appreciate your interest and will keep you updated.</p>
        </div>
      ) : (
        <div>
          <div>{formElements[activeTab]}</div>
          <div className="flex flex-wrap gap-x-2">
            <button
              disabled={activeTab === 0}
              onClick={() => setActiveTab((prev) => prev - 1)}
              className={`px-7 py-2 bg-[#a1cf5f] rounded text-black font-bold ${
                activeTab === 0 ? 'hidden opacity-50 bg-slate-600' : 'opacity-100'
              }`}
            >
              Back
            </button>
            <button
              disabled={activeTab === formElements.length - 1}
              onClick={handleNext}
              className={`px-7 py-2 bg-[#a1cf5f] rounded text-black font-bold ${
                activeTab === formElements.length - 1 ? 'hidden opacity-50 bg-slate-600' : 'opacity-100'
              }`}
            >
              Next
            </button>
            {activeTab === formElements.length - 1 && (
              <button className="px-7 py-2 bg-[#a1cf5f] rounded text-black font-bold" onClick={handleSubmit}>
                Submit
              </button>
            )}

            <p>{message}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default MainForm
