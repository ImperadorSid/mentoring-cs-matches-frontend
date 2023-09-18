import { useMutation, useQuery } from 'react-query'
import { Team } from 'types/Team'
import { getRoute, postRoute } from 'utils/fetchers'

export const useAllTeams = () =>
  useQuery('teams', () => getRoute<Team[]>('teams'))

export const useTeamById = (id: number) =>
  useQuery(['team', id], () => getRoute<Team>(`teams/${id}`))

export const useCreateTeam = () =>
  useMutation((teamData: Omit<Team, 'id'>) => postRoute('teams', teamData))
