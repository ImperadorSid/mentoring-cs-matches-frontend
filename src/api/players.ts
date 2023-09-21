import { useMutation, useQuery } from 'react-query'
import { Player, PlayerWithId } from 'types/Player'
import { getRoute, postRoute } from 'utils/fetchers'

export const useAllPlayers = () =>
  useQuery('players', () => getRoute<PlayerWithId[]>('players'))

export const usePlayerById = (id: number) =>
  useQuery(['player', id], () => getRoute<PlayerWithId>(`players/${id}`))

export const useCreatePlayer = () =>
  useMutation((playerData: Player) => postRoute('players', playerData))
