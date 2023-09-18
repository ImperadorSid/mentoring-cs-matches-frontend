import { ChangeEvent, FormEvent, useMemo, useState } from 'react'
import Form from 'components/Form'
import Input from 'components/Input'
import Button from 'components/Button'
import { useCreateTeam } from 'api/teams'

export default function TeamCreate() {
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [region, setRegion] = useState('')
  const createTeam = useCreateTeam()

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    const setters: Record<string, (value: string) => void> = {
      name: setName,
      country: setCountry,
      region: setRegion,
    }

    setters[name](value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    createTeam.mutate({
      name,
      country,
      region,
    })
  }

  const getButtonState = useMemo(() => {
    if (createTeam.isLoading) {
      return {
        buttonColor: 'bg-yellow-500',
        text: 'Creating',
      }
    }

    if (createTeam.isSuccess) {
      return {
        buttonColor: 'bg-green-500',
        text: 'Created',
      }
    }

    return {
      buttonColor: '',
      text: 'Create',
    }
  }, [createTeam.isLoading, createTeam.isSuccess])

  return (
    <Form title="Create team" onSubmit={handleSubmit}>
      <Input
        name="name"
        type="text"
        placeholder="Team name"
        onChange={handleChange}
      />
      <Input
        name="country"
        type="text"
        placeholder="Country"
        onChange={handleChange}
      />
      <Input
        name="region"
        type="text"
        placeholder="Region"
        onChange={handleChange}
      />

      <Button type="submit" className={getButtonState.buttonColor}>
        {getButtonState.text}
      </Button>
    </Form>
  )
}
