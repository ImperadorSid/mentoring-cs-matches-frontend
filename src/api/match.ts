import { useMutation } from 'react-query'
import { postRoute } from 'utils/fetchers'
import { Match } from 'types/Match'

export const useCreateMatch = () =>
  useMutation((matchData: Match) => postRoute('matches', matchData))
