import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button } from '@/components/ui/button'

type Step1Props = {
  onNext: (data: any) => void,
  heading?: string
  description?: string
}

export default function Step1({ onNext, heading, description}: Step1Props) {
  const { register, handleSubmit, setValue, getValues } = useForm()
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  // const today = new Date().toISOString().split('T')[0]
  const onSubmit = (data: any) => {
    onNext(data)
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('redirect_status') === 'succeeded') {
      setSuccessMessage('Payment succeeded! Thank you for your contribution.');
      
      // Automatically remove the success message after 5 seconds
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
  
      // Cleanup function to clear the timer
      return () => clearTimeout(timer);
    }
  }, []);  

  const handleBlur = () => {
    const value = getValues('amount');
    if (value && !value.includes('.')) {
      setValue('amount', `${value}.00`);
    }
  };

  return (
    <div>
    {successMessage && (
      <div className="bg-green-100 text-green-700 p-4 rounded mb-6">
        {successMessage}
      </div>
    )}
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
    <div className="space-y-4">
    <h1 className="text-[32px] md:text-[76px] text-[#000000] font-normal text-center leading-[51px]">
        $
        <span className="!text-[#cccccc]">
                <input
                 {...register('amount', {
                  required: 'Amount is required',
                  pattern: {
                    value: /^[0-9]+(\.[0-9]{1,5})?$/,
                    message: 'Enter a valid amount'
                  }
                })}
                  type="tel"
                  className="text-[#000000] max-w-[100px] md:max-w-[200px] border p-2 w-full rounded-md focus:outline-none border-none focus:border-none"
                  placeholder="0.00"
                  onBlur={handleBlur}
                />{' '}
                {heading}
        </span>
        </h1>
        <h4 className="text-[20px] w-full text-[#000000] md:w-[50%] font-bold leading-[24.2px] text-center m-auto py-5">
            {description}
        </h4>
        <div className="grid rounded-[10px] md:rounded-[30px] gap-[30px] md:gap-[48px] border border-[#dcdcdc] p-5 md:p-10">
            <select 
            {...register('frequency', { required: true })}
            id="frequency"
            name="frequency"
            className="border-b border-[#dcdcdc]"
            >
                <option value="one-time">Give this One Time</option>
                <option value="week">Give this Weekly</option>
                <option value="2week">Give this Every 2 Weeks</option>
                <option value="month">Give this Monthly</option>
                <option value="year">Give this Yearly</option>
            </select>

            {/* <input
            {...register('date', { required: false })}
            type="date"
            min={today}
            className="border-b border-[#dcdcdc]"
            /> */}

            <select
                {...register('paymentMethod', { required: true })}
                id="give_by"
                name="paymentMethod"
                className="border-b border-[#dcdcdc]"
            >
                <option value="card" data-method="card">
                  Give by Credit/Debit Card
                </option>
                <option value="bank" data-method="check">
                  Give by ACH Bank Transfer
                </option>
            </select>          
            </div>
        </div>     
    <Button className="mx-auto flex w-[100%] md:w-[90%] bg-[#A1CF5F] text-black" type="submit">Next</Button>
    </form>
    </div>
  )
}

