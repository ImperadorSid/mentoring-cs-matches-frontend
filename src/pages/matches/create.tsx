import { FormEvent, useMemo, useState } from 'react'
import Form from 'components/Form'
import Input from 'components/Input'
import PlayerStatsForm from 'components/PlayerStatsForm'
import Section from 'components/Section'
import Select from 'components/Select'
import Button from 'components/Button'
import { useAllTeams } from 'api/teams'
import { useAllPlayers } from 'api/players'
import { useCreateMatch } from 'api/match'
import { getSubmitButtonText } from 'utils/getSubmitButtonText'
import type { PlayerStats } from 'types/Match'

type PlayerStatsArray = {
  [key: number]: PlayerStats
}

type TeamScoresFormData = {
  team_home_id: string
  team_home_score: string
  team_away_id: string
  team_away_score: string
}

export default function MatchCreate() {
  const { isSuccess: isSuccessPlayers, data: players } = useAllPlayers()
  const { isSuccess: isSuccessTeams, data: teams } = useAllTeams()
  const createMatch = useCreateMatch()

  const [playersData, setPlayersData] = useState<PlayerStatsArray>([])

  const playersCount = useMemo(
    () => Object.keys(playersData).length,
    [playersData],
  )

  const addNewPlayer = () => {
    if (!players || !players.length) return

    setPlayersData((current) => {
      const updatedForms = { ...current }
      const newPlayerFormIndex = playersCount

      updatedForms[newPlayerFormIndex] = {
        kills: 0,
        deaths: 0,
        assists: 0,
        headshots: 0,
        player_id: players[0].id,
      }

      return updatedForms
    })
  }

  const removeLastPlayer = () => {
    setPlayersData((current) => {
      const updatedForms = { ...current }
      const lastPlayerFormIndex = playersCount - 1

      delete updatedForms[lastPlayerFormIndex]

      return updatedForms
    })
  }

  const handlePlayerFormChange = (
    id: number,
    playerData: Partial<PlayerStats>,
  ) => {
    setPlayersData((current) => {
      const updatedForms = { ...current }

      updatedForms[id] = { ...updatedForms[id], ...playerData }

      return updatedForms
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const { team_home_id, team_home_score, team_away_id, team_away_score } =
      Object.fromEntries(formData) as TeamScoresFormData

    const creationData = {
      team_home_id: parseInt(team_home_id || '0'),
      team_home_score: parseInt(team_home_score || '0'),
      team_away_id: parseInt(team_away_id || '0'),
      team_away_score: parseInt(team_away_score || '0'),
      player_performances_attributes: Object.values(playersData),
    }

    createMatch.mutate(creationData)
  }

  const getButtonText = useMemo(
    () => getSubmitButtonText(createMatch),
    [createMatch],
  )

  if (!isSuccessTeams || !isSuccessPlayers) return 'Loading...'

  return (
    <Form title="Create match" onSubmit={handleSubmit}>
      <Section title="Team scores">
        <div className="flex gap-3">
          <Select
            name="team_home_id"
            options={teams.map(({ id, name }) => ({
              name,
              value: id.toString(),
            }))}
            className="grow-[6]"
          />
          <Input
            name="team_home_score"
            type="number"
            placeholder="Home Score"
            className="w-0 grow-[4]"
          />
        </div>

        <div className="flex gap-3">
          <Select
            name="team_away_id"
            options={teams.map(({ id, name }) => ({
              name,
              value: id.toString(),
            }))}
            className="grow-[6]"
          />
          <Input
            name="team_away_score"
            type="number"
            placeholder="Away Score"
            className="w-0 grow-[4]"
          />
        </div>
      </Section>

      <Section title="Players performances">
        {Object.keys(playersData).map((formIndex) => (
          <PlayerStatsForm
            key={formIndex}
            availablePlayers={players}
            formIndex={parseInt(formIndex)}
            onFormChange={handlePlayerFormChange}
          />
        ))}

        <div className="flex gap-2">
          <Button className="ms-auto bg-green-700" onClick={addNewPlayer}>
            Add new
          </Button>

          {playersCount > 0 && (
            <Button className="bg-red-700" onClick={removeLastPlayer}>
              Remove last
            </Button>
          )}
        </div>
      </Section>

      <Button type="submit">{getButtonText}</Button>
    </Form>
  )
}
