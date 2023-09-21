import { FormEvent, useMemo } from 'react'
import Form from 'components/Form'
import Input from 'components/Input'
import Button from 'components/Button'
import { useCreateTeam } from 'api/teams'
import { getSubmitButtonText } from 'utils/getSubmitButtonText'
import { Team } from 'types/Team'

export default function TeamCreate() {
  const createTeam = useCreateTeam()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const values = Object.fromEntries(formData) as Team

    createTeam.mutate(values)
  }

  const getButtonText = useMemo(
    () => getSubmitButtonText<Team>(createTeam),
    [createTeam],
  )

  return (
    <Form title="Create team" onSubmit={handleSubmit}>
      <Input name="name" type="text" placeholder="Team name" />
      <Input name="country" type="text" placeholder="Country" />
      <Input name="region" type="text" placeholder="Region" />

      <Button type="submit">{getButtonText}</Button>
    </Form>
  )
}
