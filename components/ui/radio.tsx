import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="inline-flex items-center">
        <input
          type="radio"
          className={cn(
            'h-4 w-4 border-gray-300 text-[#1295d8] focus:ring-[#1295d8]',
            className
          )}
          ref={ref}
          {...props}
        />
        {label && <span className="ml-2 text-gray-700">{label}</span>}
      </label>
    )
  }
)
Radio.displayName = 'Radio'

export { Radio }

