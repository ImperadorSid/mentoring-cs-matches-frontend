import { useMutation, useQuery } from 'react-query'
import { Team, TeamWithId } from 'types/Team'
import { getRoute, postRoute } from 'utils/fetchers'

export const useAllTeams = () =>
  useQuery('teams', () => getRoute<TeamWithId[]>('teams'))

export const useTeamById = (id: number) =>
  useQuery(['team', id], () => getRoute<TeamWithId>(`teams/${id}`))

export const useCreateTeam = () =>
  useMutation((teamData: Team) => postRoute('teams', teamData))
