import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { recaptcha_token, ...formData } = body

    // Verify reCAPTCHA
    const recaptchaResponse = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptcha_token,
        },
      }
    )

    if (!recaptchaResponse.data.success) {
      return NextResponse.json({ success: false, message: 'reCAPTCHA verification failed.' }, { status: 400 })
    }

    // Send data to WordPress API
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
    if (!response.data.is_valid) {
      return NextResponse.json({ success: false, message: 'Form validation failed.', errors: response.data.validation_messages }, { status: 400 })
    }

    return NextResponse.json({ success: true, message: '' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, message: 'Server error. Please try again.' }, { status: 500 })
  }
}
