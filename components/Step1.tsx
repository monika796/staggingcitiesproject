import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type Step1Props = {
  onNext: (data: any) => void
}

export default function Step1({ onNext }: Step1Props) {
  const { register, handleSubmit, control, watch } = useForm()
  const [customAmount, setCustomAmount] = useState(false)

  const watchAmount = watch('amount')

  const onSubmit = (data: any) => {
    onNext(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <Label>Donation Frequency</Label>
        <Controller
          name="frequency"
          control={control}
          defaultValue="one-time"
          render={({ field }) => (
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-time" id="one-time" />
                <Label htmlFor="one-time">One-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly">Monthly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="day" id="day" />
                <Label htmlFor="monthly">1 Day</Label>
              </div>
            </RadioGroup>
          )}
        />
      </div>

      <div className="space-y-4">
        <Label>Donation Amount</Label>
        <Controller
          name="amount"
          control={control}
          defaultValue="25"
          render={({ field }) => (
            <RadioGroup
              onValueChange={(value) => {
                field.onChange(value)
                setCustomAmount(value === 'custom')
              }}
              defaultValue={field.value}
              className="grid grid-cols-3 gap-4"
            >
              {['25', '50', '100', '150', 'custom'].map((amount) => (
                <div key={amount} className="flex items-center space-x-2">
                  <RadioGroupItem value={amount} id={`amount-${amount}`} />
                  <Label htmlFor={`amount-${amount}`}>${amount}</Label>
                </div>
              ))}
            </RadioGroup>
          )}
        />
        {customAmount && (
          <Input
            type="number"
            placeholder="Enter custom amount"
            {...register('customAmount', { min: 1 })}
          />
        )}
      </div>

      <div className="space-y-4">
        <Label htmlFor="designation">Donation Designation</Label>
        <Controller
          name="designation"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger id="designation">
                <SelectValue placeholder="Select designation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Fund</SelectItem>
                <SelectItem value="programs">Programs</SelectItem>
                <SelectItem value="operations">Operations</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <Button type="submit">Next</Button>
    </form>
  )
}

