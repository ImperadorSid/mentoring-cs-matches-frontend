export const getRoute = async <T>(
  route: string,
  errorMessage = 'An error occurred',
): Promise<T> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/${route}`,
  )

  if (!response.ok) {
    throw errorMessage
  }

  return response.json()
}
