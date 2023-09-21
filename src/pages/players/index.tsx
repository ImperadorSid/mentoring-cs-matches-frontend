import { useRouter } from 'next/router'
import Header from 'components/Header'
import { useAllPlayers } from 'api/players'

export default function PlayersIndex() {
  const { isSuccess, data: players } = useAllPlayers()
  const router = useRouter()

  if (!isSuccess) return 'Loading...'

  return (
    <>
      <Header title="Players" />

      <table className="table-auto">
        <thead>
          <tr>
            <th className="text-left pb-5">Name</th>
            <th className="text-left pb-5">Nickname</th>
            <th className="text-left pb-5">Nationality</th>
            <th className="text-left pb-5">Birth date</th>
            <th className="text-right pb-5">Team</th>
          </tr>
        </thead>
        <tbody>
          {players.map(
            ({ id, name, nickname, nationality, birth_date, team }) => (
              <tr
                key={id}
                className="hover:bg-gray-800 cursor-pointer"
                onClick={() => router.push(`/players/${id}`)}
              >
                <td className="p-2">{name}</td>
                <td className="p-2">{nickname}</td>
                <td className="p-2">{nationality}</td>
                <td className="p-2">{birth_date}</td>
                <td className="p-2 text-right">{team.name}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </>
  )
}
