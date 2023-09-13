import Form from 'components/Form'
import Input from 'components/Input'
import Select from 'components/Select'
import Button from 'components/Button'
import { useTeams } from 'hooks/teams'

export default function PlayerCreate() {
  const { teams } = useTeams()

  return (
    <Form title="Create player">
      <Input name="name" type="text" placeholder="Player name" />
      <Input name="nickname" type="text" placeholder="Nickname" />
      <Input name="nationality" type="text" placeholder="Nationality" />
      <Input name="birth_date" type="date" placeholder="Birth date" />

      <Select
        name="team_id"
        options={teams.map(({ id, name }) => ({ name, value: id.toString() }))}
      />

      <Button type="submit">Create</Button>
    </Form>
  )
}
