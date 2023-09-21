import Link from 'next/link'
import Stat from './Stat'
import { useAllPlayers } from 'api/players'
import { useAllTeams } from 'api/teams'

type HeaderProps = {
  title: string
  showBackButton?: boolean
}

export default function Header({ title, showBackButton = true }: HeaderProps) {
  const { isSuccess: isSuccessPlayers, data: players } = useAllPlayers()
  const { isSuccess: isSuccessTeams, data: teams } = useAllTeams()

  if (!isSuccessTeams || !isSuccessPlayers) return 'Loading...'

  return (
    <header className="flex justify-between items-end">
      <div>
        {showBackButton && (
          <Link href="/" className="hover:underline">
            Back
          </Link>
        )}
        <h1 className="text-3xl font-semibold">{title}</h1>
      </div>

      <div className="flex gap-3">
        <Stat description="teams" value={teams.length} destination="/teams" />
        <Stat
          description="players"
          value={players.length}
          destination="/players"
        />
      </div>
    </header>
  )
}
