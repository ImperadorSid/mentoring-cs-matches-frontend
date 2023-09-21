import { useTeamById } from 'api/teams'
import Header from 'components/Header'
import { useRouter } from 'next/router'

export default function TeamDetails() {
  const router = useRouter()
  const teamId = parseInt(router.query.id as string)
  const { isSuccess, data: team } = useTeamById(teamId)

  if (!isSuccess) return 'Loading...'

  return (
    <>
      <Header title={team.name} />

      {teamId}
    </>
  )
}
