import { usePlayerById } from 'api/players'
import Header from 'components/Header'
import { useRouter } from 'next/router'

export default function PlayerDetails() {
  const router = useRouter()
  const playerId = parseInt(router.query.id as string)
  const { isSuccess, data: player } = usePlayerById(playerId)

  if (!isSuccess) return 'Loading...'

  return (
    <>
      <Header title={player.name} />

      {playerId}
    </>
  )
}
