import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import { Input } from './ui/input'

// 1️⃣ Definisikan schema validasi dengan Zod
const teamMemberSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  role: z.string().min(1, 'Role is required'),
})

const projectSchema = z.object({
  projectName: z.string().min(1, 'Project name is required'),
  teamMembers: z
    .array(teamMemberSchema)
    .min(1, 'At least one team member is required'),
})

// 2️⃣ Type otomatis dari schema
type ProjectFormData = z.infer<typeof projectSchema>

export default function DynamicFormWithZod() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectName: '',
      teamMembers: [{ name: '', email: '', role: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'teamMembers',
  })

  const onSubmit = (data: ProjectFormData) => {
    console.log('✅ Valid Data:', data)
  }

  return (
    <div className='flex flex-col justify-center p-20'>
      <h1>Dynamic Form with Zod Validation</h1>
      <div className="flex justify-center m-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
          {/* Project Name */}
          <div>
            <Input
              {...register('projectName')}
              placeholder="Project Name"
            />
            {errors.projectName && (
              <p className="text-sm text-red-600 mt-1">
                {errors.projectName.message}
              </p>
            )}
          </div>

          {/* Team Members */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Team Members</h3>

            {fields.map((field, index) => (
              <div key={field.id} className="p-4 border rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">Member {index + 1}</h4>
                  {fields.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </Button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <Input
                      {...register(`teamMembers.${index}.name`)}
                      placeholder="Full Name"
                    />
                    {errors.teamMembers?.[index]?.name && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.teamMembers[index]?.name?.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      {...register(`teamMembers.${index}.email`)}
                      type="email"
                      placeholder="Email"
                    />
                    {errors.teamMembers?.[index]?.email && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.teamMembers[index]?.email?.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      {...register(`teamMembers.${index}.role`)}
                      placeholder="Role"
                    />
                    {errors.teamMembers?.[index]?.role && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.teamMembers[index]?.role?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={() => append({ name: '', email: '', role: '' })}
              className="w-full"
            >
              Add Team Member
            </Button>
          </div>

          <Button type="submit" className="w-full">
            Create Project
          </Button>
        </form>
      </div>
    </div>
  )
}
