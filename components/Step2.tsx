import { useForm, Controller } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

type Step2Props = {
  onNext: (data: any) => void;
  onPrevious: () => void;
};

export default function Step2({ onNext, onPrevious }: Step2Props) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      coverFee: false,
      newsletter: false,
      paymentMethod: 'card',
    },
  });

  const onSubmit = (data: any) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <Label>Cover transaction fee?</Label>
        <Controller
          name="coverFee"
          control={control}
          render={({ field }) => (
            <Checkbox
              checked={field.value}
              onChange={(event) => field.onChange(event.target.checked)}
              id="cover-fee"
            />
          )}
        />
        <Label htmlFor="cover-fee">Yes, I'd like to cover the transaction fee</Label>
      </div>

      <div className="space-y-4">
        <Label>Subscribe to newsletter?</Label>
        <Controller
          name="newsletter"
          control={control}
          render={({ field }) => (
            <Checkbox
              checked={field.value}
              onChange={(event) => field.onChange(event.target.checked)}
              id="newsletter"
            />
          )}
        />
        <Label htmlFor="newsletter">Yes, I'd like to receive the newsletter</Label>
      </div>

      <div className="space-y-4">
        <Label>Payment Method</Label>
        <Controller
          name="paymentMethod"
          control={control}
          render={({ field }) => (
            <RadioGroup value={field.value} onValueChange={field.onChange} className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">Credit Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="check" id="check" />
                <Label htmlFor="check">Check</Label>
              </div>
            </RadioGroup>
          )}
        />
      </div>

      <div className="flex justify-between">
        <Button type="button" onClick={onPrevious} variant="outline">
          Previous
        </Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
}
