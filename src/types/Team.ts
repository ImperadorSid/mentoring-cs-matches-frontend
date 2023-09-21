import { TeamResult } from './Match'
import { Player } from './Player'

export type Team = {
  id: number
  name: string
  country: string
  region: string
}

export type TeamRoster = Team & {
  players: Player[]
  matches_as_home: TeamResult[]
  matches_as_away: TeamResult[]
}
