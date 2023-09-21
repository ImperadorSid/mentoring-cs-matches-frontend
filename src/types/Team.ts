export type Team = {
  name: string
  country: string
  region: string
}

export type TeamWithId = Team & { id: number }
