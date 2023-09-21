import Header from 'components/Header'
import { useAllTeams } from 'api/teams'
import { useRouter } from 'next/router'

export default function TeamsIndex() {
  const { isSuccess, data: teams } = useAllTeams()
  const router = useRouter()

  if (!isSuccess) return 'Loading...'

  return (
    <>
      <Header title="Teams" />

      <table className="table-fixed">
        <thead>
          <tr>
            <th className="text-left pb-5">Name</th>
            <th className="text-right pb-5">Country</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(({ id, name, country }) => (
            <tr
              key={id}
              className="hover:bg-gray-800 cursor-pointer"
              onClick={() => router.push(`/teams/${id}`)}
            >
              <td className="p-2">{name}</td>
              <td className="p-2 text-right">{country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
