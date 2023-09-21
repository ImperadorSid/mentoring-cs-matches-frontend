import { Team } from './Team'
import { PlayerStats } from './Match'

export type Player = {
  id: number
  name: string
  nickname: string
  nationality: string
  birth_date: string
}

export type PlayerCareer = Player & {
  team: Team
  player_performances: PlayerStats[]
}
