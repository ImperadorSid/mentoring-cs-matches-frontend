export type PlayerStats = {
  player_id: number
  kills: number
  deaths: number
  assists: number
  headshots: number
}

export type PlayerStatsWithMatchInfo = Omit<PlayerStats, 'player_id'> & {
  match: string
  'win?': boolean
}

export type TeamResult = {
  opponent: string
  opponent_id: number
  opponent_score: number
  score: number
  'win?': boolean
}

export type Match = {
  team_home_id: number
  team_home_score: number
  team_away_id: number
  team_away_score: number
  player_performances_attributes: PlayerStats[]
}
