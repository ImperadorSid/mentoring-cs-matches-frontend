const apiRoute = async <T>(
  route: string,
  options = {},
  errorMessage: string,
): Promise<T> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/${route}`,
    options,
  )

  if (!response.ok) {
    throw errorMessage
  }

  return response.json()
}

export const getRoute = <T>(
  route: string,
  errorMessage = 'An error occurred',
): Promise<T> => apiRoute<T>(route, {}, errorMessage)

export const postRoute = (
  route: string,
  data = {},
  errorMessage = 'An error occurred',
) =>
  apiRoute(
    route,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    },
    errorMessage,
  )
