import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Team, TeamRoster } from 'types/Team'
import { getRoute, postRoute } from 'utils/fetchers'

export const useAllTeams = () =>
  useQuery('teams', () => getRoute<TeamRoster[]>('teams'))

export const useTeamById = (id: number) =>
  useQuery(['team', id], () => getRoute<TeamRoster>(`teams/${id}`))

export const useCreateTeam = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (teamData: Omit<Team, 'id'>) => postRoute('teams', teamData),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['teams'] }),
  })
}
