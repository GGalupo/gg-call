import { Button, Heading, MultiStep, Text, TextInput } from '@ggalupo-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Container, Form, FormError, Header } from './styles'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must have at least 3 characters.')
    .regex(/^([a-z\\\\-]+)$/i, 'Username must have only letters and hyphens.')
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, 'Name must have at least 3 characters.'),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const handleRegister = async (data: RegisterFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Welcome to GG Call!</Heading>
        <Text>
          We need some info to create your profile! Don&apos;t worry, you can
          always edit it later!
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size="sm">Username</Text>
          <TextInput placeholder="Your username" {...register('username')} />
          {errors.username && (
            <FormError size="sm">{errors.username.message}</FormError>
          )}
        </label>

        <label>
          <Text size="sm">Full name</Text>
          <TextInput placeholder="Your name" {...register('name')} />
          {errors.name && (
            <FormError size="sm">{errors.name.message}</FormError>
          )}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Next step
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
