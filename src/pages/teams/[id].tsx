import { useTeamById } from 'api/teams'
import Header from 'components/Header'
import Section from 'components/Section'
import { useRouter } from 'next/router'

export default function TeamDetails() {
  const router = useRouter()
  const teamId = parseInt(router.query.id as string)
  const { isSuccess, data: team } = useTeamById(teamId)

  if (!isSuccess) return 'Loading...'

  return (
    <>
      <Header title={team.name} />

      <Section title="Players">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="text-left pb-5">Name</th>
              <th className="pb-5">Nickname</th>
              <th className="pb-5">Nationality</th>
              <th className="pb-5">Birth date</th>
            </tr>
          </thead>
          <tbody>
            {team.players.map(
              ({ id, name, nickname, nationality, birth_date }) => (
                <tr
                  key={id}
                  className="hover:bg-gray-800 cursor-pointer text-center"
                  onClick={() => router.push(`/players/${id}`)}
                >
                  <td className="text-left p-2">{name}</td>
                  <td className="p-2">{nickname}</td>
                  <td className="p-2">{nationality}</td>
                  <td className="p-2">{birth_date}</td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </Section>

      <Section title="Matches">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="text-left pb-5">Opponent</th>
              <th className="pb-5">Score</th>
              <th className="pb-5">Opponent score</th>
              <th className="pb-5">Win?</th>
            </tr>
          </thead>
          <tbody>
            {[team.matches_as_home, team.matches_as_away].map((matches) =>
              matches.map((match) => (
                <tr
                  key={Math.random()}
                  className="hover:bg-gray-800 cursor-pointer text-center"
                  onClick={() => router.push(`/teams/${match.opponent_id}`)}
                >
                  <td className="text-left p-2">{match.opponent}</td>
                  <td className="p-2">{match.score}</td>
                  <td className="p-2">{match.opponent_score}</td>
                  <td className="p-2">{match['win?'] ? 'Yes' : 'No'}</td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </Section>
    </>
  )
}
