import { useQuery } from 'react-query'
import { Team } from 'types/Team'
import { getRoute } from 'utils/fetchers'

export const useAllTeams = () =>
  useQuery('teams', () => getRoute<Team[]>('teams'))

export const useTeamById = (id: number) =>
  useQuery(['team', id], () => getRoute<Team>(`teams/${id}`))
