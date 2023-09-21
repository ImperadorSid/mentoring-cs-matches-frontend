import { UseMutationResult } from 'react-query'

export const getSubmitButtonText = <T>(
  mutation: UseMutationResult<unknown, unknown, T, unknown>,
) => {
  if (mutation.isError) {
    return 'Failed to create'
  }

  if (mutation.isLoading) {
    return 'Creating'
  }

  if (mutation.isSuccess) {
    return 'Created'
  }

  return 'Create'
}
