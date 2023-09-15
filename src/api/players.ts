import { useQuery } from 'react-query'
import { Player } from 'types/Player'
import { getRoute } from 'utils/fetchers'

export const useAllPlayers = () =>
  useQuery('players', () => getRoute<Player[]>('players'))

export const usePlayerById = (id: number) =>
  useQuery(['player', id], () => getRoute<Player>(`players/${id}`))
