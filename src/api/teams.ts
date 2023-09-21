import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Team, TeamWithId } from 'types/Team'
import { getRoute, postRoute } from 'utils/fetchers'

export const useAllTeams = () =>
  useQuery('teams', () => getRoute<TeamWithId[]>('teams'))

export const useTeamById = (id: number) =>
  useQuery(['team', id], () => getRoute<TeamWithId>(`teams/${id}`))

export const useCreateTeam = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (teamData: Team) => postRoute('teams', teamData),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['teams'] }),
  })
}
