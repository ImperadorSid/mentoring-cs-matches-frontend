import { FormEvent, useMemo } from 'react'
import Form from 'components/Form'
import Input from 'components/Input'
import Select from 'components/Select'
import Button from 'components/Button'
import { useAllTeams } from 'api/teams'
import { useCreatePlayer } from 'api/players'
import { getSubmitButtonText } from 'utils/getSubmitButtonText'
import type { Player } from 'types/Player'

type PlayerCreateFormData = Omit<Player, 'id'> & {
  team_id: string
}

export default function PlayerCreate() {
  const { isSuccess, data: teams } = useAllTeams()
  const createPlayer = useCreatePlayer()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const values = Object.fromEntries(formData) as PlayerCreateFormData

    createPlayer.mutate(values)
  }

  const getButtonText = useMemo(
    () => getSubmitButtonText(createPlayer),
    [createPlayer],
  )

  if (!isSuccess) return 'Loading...'

  return (
    <Form title="Create player" onSubmit={handleSubmit}>
      <Input name="name" type="text" placeholder="Player name" />
      <Input name="nickname" type="text" placeholder="Nickname" />
      <Input name="nationality" type="text" placeholder="Nationality" />
      <Input name="birth_date" type="date" placeholder="Birth date" />

      <Select
        name="team_id"
        options={teams.map(({ id, name }) => ({
          name,
          value: id.toString(),
        }))}
      />

      <Button type="submit">{getButtonText}</Button>
    </Form>
  )
}
