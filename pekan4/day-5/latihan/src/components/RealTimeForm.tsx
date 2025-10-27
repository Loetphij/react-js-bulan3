import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

export default function RealTimeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch
  } = useForm<ContactForm>({
    mode: 'onChange'
  })

  const watchAllFields = watch()

  const onSubmit = async (data: ContactForm) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(data)
  }

  const getFieldStatus = (fieldName: keyof ContactForm) => {
    if (errors[fieldName]) return 'error'
    if (watchAllFields[fieldName]) return 'success'
    return 'default'
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <div>
        <Input
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters'
            }
          })}
          placeholder="Full Name"
          className={getFieldStatus('name') === 'error' ? 'border-red-500' : ''}
        />
        {errors.name && (
          <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Input
          {...register('email', {
            required: 'Email is required',
            pattern: /^\S+@\S+$/i
          })}
          type="email"
          placeholder="Email"
          className={getFieldStatus('email') === 'error' ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Input
          {...register('phone', {
            pattern: /^[\+]?[1-9][\d]{0,15}$/
          })}
          type="tel"
          placeholder="Phone (optional)"
        />
        {errors.phone && (
          <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters'
            }
          })}
          placeholder="Your message"
          className={`w-full px-3 py-2 border rounded-md min-h-[100px] ${
            getFieldStatus('message') === 'error' ? 'border-red-500' : ''
          }`}
        />
        {errors.message && (
          <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}