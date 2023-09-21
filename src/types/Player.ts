import { Team } from './Team'

export type Player = {
  id: number
  name: string
  nickname: string
  nationality: string
  birth_date: string
}

export type PlayerWithTeam = Player & {
  team: Team
}
