export type Player = {
  name: string
  nickname: string
  nationality: string
  birth_date: string
  team_id: number
}

export type PlayerWithId = Player & { id: number }
