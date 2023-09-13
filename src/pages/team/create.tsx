import Form from 'components/Form'
import Input from 'components/Input'
import Button from 'components/Button'

export default function TeamCreate() {
  return (
    <Form title="Create team">
      <Input name="name" type="text" placeholder="Team name" />
      <Input name="country" type="text" placeholder="Country" />
      <Input name="region" type="text" placeholder="Region" />

      <Button type="submit">Create</Button>
    </Form>
  )
}
