import NavButton from 'components/NavButton'
import Section from 'components/Section'
import { useAllTeams } from 'api/teams'
import { useAllPlayers } from 'api/players'
import Stat from 'components/Stat'

export default function Home() {
  const { isSuccess: isSuccessPlayers, data: players } = useAllPlayers()
  const { isSuccess: isSuccessTeams, data: teams } = useAllTeams()

  if (!isSuccessTeams || !isSuccessPlayers) return 'Loading...'

  return (
    <>
      <h1 className="text-3xl font-semibold">CS Matches</h1>

      <Section title="Dashboard">
        <div className="flex gap-3">
          <Stat description="teams" value={teams.length} />
          <Stat description="players" value={players.length} />
        </div>
      </Section>

      <Section title="Create new">
        <nav className="flex gap-3">
          <NavButton title="Team" destination="/team/create" />
          <NavButton title="Player" destination="/player/create" />
          <NavButton title="Match" destination="/match/create" />
        </nav>
      </Section>
    </>
  )
}
