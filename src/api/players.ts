import { useMutation, useQuery } from 'react-query'
import { Player, PlayerWithTeam } from 'types/Player'
import { getRoute, postRoute } from 'utils/fetchers'

export const useAllPlayers = () =>
  useQuery('players', () => getRoute<PlayerWithTeam[]>('players'))

export const usePlayerById = (id: number) =>
  useQuery(['player', id], () => getRoute<PlayerWithTeam>(`players/${id}`))

export const useCreatePlayer = () =>
  useMutation((playerData: Omit<Player, 'id'>) =>
    postRoute('players', playerData),
  )
