import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import { Input } from './ui/input'

// 🔹 1. Definisikan schema validasi dengan Zod
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .optional()
    .refine(val => !val || /^[\+]?[1-9][\d]{0,15}$/.test(val), {
      message: 'Invalid phone number format'
    }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  file: z
    .any()
    .refine(files => files?.length === 1, 'File is required')
    .refine(
      files =>
        files?.[0]?.type?.startsWith('image/') ||
        ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(files?.[0]?.type),
      'Only image, PDF, or Word files are allowed'
    ),
})

type AdvancedFormData = z.infer<typeof formSchema>

export default function AdvancedIntegrationForm() {
  const [preview, setPreview] = useState<string | null>(null)

  // 🔹 2. Inisialisasi form dengan Zod resolver dan real-time mode
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset
  } = useForm<AdvancedFormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange'
  })

  const fileInput = watch('file')

  // 🔹 3. Preview file saat diubah
  useEffect(() => {
    if (fileInput?.[0]) {
      const file = fileInput[0]
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = e => setPreview(e.target?.result as string)
        reader.readAsDataURL(file)
      } else {
        setPreview(null)
      }
    }
  }, [fileInput])

  // 🔹 4. Handle submit
  const onSubmit = async (data: AdvancedFormData) => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('phone', data.phone || '')
    formData.append('message', data.message)
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('file', data.file[0])

    // Simulasi API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('✅ Submitted:', Object.fromEntries(formData))

    reset() // reset form setelah submit
    setPreview(null)
  }

  // 🔹 5. Helper untuk status field
  const watchAll = watch()
  const getStatus = (field: keyof AdvancedFormData) => {
    if (errors[field]) return 'error'
    if (watchAll[field]) return 'success'
    return 'default'
  }

  return (
    <div className="flex justify-center p-20">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
        <h2 className="text-2xl font-bold">Advanced Integration Form</h2>

        {/* ========== Contact Section ========== */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Contact Information</h3>

          <Input
            {...register('name')}
            placeholder="Full Name"
            className={getStatus('name') === 'error' ? 'border-red-500' : ''}
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}

          <Input
            {...register('email')}
            type="email"
            placeholder="Email"
            className={getStatus('email') === 'error' ? 'border-red-500' : ''}
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}

          <Input
            {...register('phone')}
            type="tel"
            placeholder="Phone (optional)"
          />
          {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}

          <textarea
            {...register('message')}
            placeholder="Your Message"
            className={`w-full px-3 py-2 border rounded-md min-h-[100px] ${
              getStatus('message') === 'error' ? 'border-red-500' : ''
            }`}
          />
          {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
        </div>

        {/* ========== File Upload Section ========== */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Upload Document</h3>

          <Input {...register('title')} placeholder="Document Title" />
          {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}

          <textarea
            {...register('description')}
            placeholder="Description"
            className="w-full px-3 py-2 border rounded-md min-h-[100px]"
          />
          {errors.description && <p className="text-red-600 text-sm">{errors.description.message}</p>}

          <Input
            {...register('file')}
            type="file"
            accept="image/*,.pdf,.doc,.docx"
          />
          {errors.file && <p className="text-red-600 text-sm">{errors.file.message}</p>}

          {preview && (
            <div className="mt-4">
              <img
                src={preview}
                alt="Preview"
                className="max-w-full h-48 object-cover rounded-md"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Form'}
        </Button>
      </form>
    </div>
  )
}
