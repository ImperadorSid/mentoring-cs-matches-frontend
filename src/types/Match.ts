export type PlayerStats = {
  player_id: number
  kills: number
  deaths: number
  assists: number
  headshots: number
}

export type Match = {
  team_home_id: number
  team_home_score: number
  team_away_id: number
  team_away_score: number
  player_performances_attributes: PlayerStats[]
}
