import { useForm, Controller } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { countries } from '@/components/CountryList';

type Step2Props = {
  onNext: (data: any) => void;
  onPrevious: () => void;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: number;
  postalCode?: string;
  street?: string;
  city?: string;
  state?: string;
  country?: string;
};

export default function Step2({ onNext, onPrevious, firstName, lastName, email, phone, postalCode, street, city, state, country }: Step2Props) {
  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      firstName: firstName || '',
      lastName: lastName || '',
      email: email || '',
      phone: phone || '',
      postalCode: postalCode || '',
      street: street || '',
      city: city || '',
      state: state || '',
      country: country || '',
    },
  });

  const onSubmit = (data: any) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-center">Your Information</h3>
      </div>

      <div className="flex flex-wrap gap-6 md:gap-0 md:flex-nowrap space-x-0 md:space-x-4">
        <div className="space-y-4 m-0  w-full md:w-1/2">
          <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</Label>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: 'First Name is required' }}
            render={({ field }) => (
              <>
                <input {...field} type="text" id="firstName" placeholder="Enter your first name" className="border-b w-full border-[#dcdcdc]" />
                {errors.firstName && <span className="text-red-500 text-sm block">{errors.firstName.message}</span>}
              </>
            )}
          />
        </div>

        <div className="space-y-4  m-0  w-full md:w-1/2">
          <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</Label>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: 'Last Name is required' }}
            render={({ field }) => (
              <>
                <input {...field} type="text" id="lastName" placeholder="Enter your last name" className="border-b w-full border-[#dcdcdc]" />
                {errors.lastName && <span className="text-red-500 text-sm block">{errors.lastName.message}</span>}
              </>
            )}
          />
        </div>
      </div>

      <div className="space-y-4 ">
        <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <>
              <input {...field} type="email" id="email" placeholder="Enter your email" className="w-full border-b border-[#dcdcdc]" />
              {errors.email && <span className="text-red-500 text-sm block">{errors.email.message}</span>}
            </>
          )}
        />
      </div>
      
      <div className="space-y-4">
        <Label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</Label>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: 'Phone number is required',
            pattern: {
              value: /^\+?[0-9 ]{10,20}$/,
               message: 'Phone number must be 10 to 15 digits and can optionally start with +',
            },
          }}
          render={({ field }) => (
            <>
              <input {...field} type="tel" id="phone" placeholder="Enter your phone number" className="w-full border-b border-[#dcdcdc]" />
              {errors.phone && <span className="text-red-500 text-sm block">{errors.phone.message}</span>}
            </>
          )}
        />
      </div>

      <div className="space-y-4">
        <Label htmlFor="street" className="block text-sm font-medium text-gray-700">Street</Label>
        <Controller
          name="street"
          control={control}
          rules={{ required: 'Street is required' }}
          render={({ field }) => (
            <>
              <input {...field} type="text" id="street" placeholder="Enter your street address" className="w-full border-b border-[#dcdcdc]" />
              {errors.street && <span className="text-red-500 text-sm block">{errors.street.message}</span>}
            </>
          )}
        />
      </div>

      <div className="flex gap-6 md:gap-0  space-x-0 md:space-x-4 flex-wrap md:flex-nowrap">
        <div className="space-y-4 w-full md:w-1/2">
          <Label htmlFor="city" className="block text-sm font-medium text-gray-700">City</Label>
          <Controller
            name="city"
            control={control}
            rules={{ required: 'City is required' }}
            render={({ field }) => (
              <>
                <input {...field} type="text" id="city" placeholder="Enter your city" className="border-b w-full border-[#dcdcdc]" />
                {errors.city && <span className="text-red-500 text-sm block">{errors.city.message}</span>}
              </>
            )}
          />
        </div>
        <div className="space-y-4 w-full md:w-1/2">
          <Label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</Label>
          <Controller
            name="postalCode"
            control={control}
            rules={{
              required: 'Postal code is required',
            }}
            render={({ field }) => (
              <>
                <input {...field} type="text" id="postalCode" placeholder="Enter your postal code" className="border-b w-full border-[#dcdcdc]" />
                {errors.postalCode && <span className="text-red-500 text-sm block">{errors.postalCode.message}</span>}
              </>
            )}
          />
        </div>        
      </div>

      <div className="space-y-4">
          <Label htmlFor="state" className="block text-sm font-medium text-gray-700">State</Label>
          <Controller
            name="state"
            control={control}
            rules={{ required: 'State is required' }}
            render={({ field }) => (
              <>
                <input {...field} type="text" id="state" placeholder="Enter your state" className="w-full border-b border-[#dcdcdc]" />
                {errors.state && <span className="text-red-500 text-sm block">{errors.state.message}</span>}
              </>
            )}
          />
        </div>

      <div className="space-y-4">
        <Label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</Label>
        <Controller
          name="country"
          control={control}
          rules={{ required: 'Country is required' }}
          render={({ field }) => (
            <>
              <select {...field} id="country" className="w-full border-b border-[#dcdcdc]">
                <option value="">Select your country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country && <span className="text-red-500 text-sm block">{errors.country.message}</span>}
            </>
          )}
        />
      </div>

      <div className="flex justify-between flex-wrap md:flex-nowrap">
        <Button type="button" onClick={onPrevious} variant="outline" className="text-[#000000] border-black border border-solid text-black py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          Previous
        </Button>
        <Button className="bg-[#A1CF5F] text-black" type="submit">Next</Button>
      </div>
    </form>
  );
}
