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

      <table className="table-auto">
        <thead>
          <tr>
            <th className="text-left pb-5">Match</th>
            <th className="pb-5">Win?</th>
            <th className="pb-5">Kills</th>
            <th className="pb-5">Deaths</th>
            <th className="pb-5">Assists</th>
            <th className="pb-5">Headshots</th>
          </tr>
        </thead>
        <tbody>
          {player.player_performances.map((match) => (
            <tr
              key={Math.random()}
              className="hover:bg-gray-800 cursor-pointer text-center"
            >
              <td className="text-left p-2">{match.match}</td>
              <td className="p-2">{match['win?'] ? 'Yes' : 'No'}</td>
              <td className="p-2">{match.kills}</td>
              <td className="p-2">{match.deaths}</td>
              <td className="p-2">{match.assists}</td>
              <td className="p-2">{match.headshots}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
