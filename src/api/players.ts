import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Player, PlayerCareer } from 'types/Player'
import { getRoute, postRoute } from 'utils/fetchers'

export const useAllPlayers = () =>
  useQuery('players', () => getRoute<PlayerCareer[]>('players'))

export const usePlayerById = (id: number) =>
  useQuery(['player', id], () => getRoute<PlayerCareer>(`players/${id}`))

export const useCreatePlayer = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (playerData: Omit<Player, 'id'>) =>
      postRoute('players', playerData),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['players'] }),
  })
}
