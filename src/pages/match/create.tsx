import { ChangeEvent, FormEvent, useMemo, useState } from 'react'
import Form from 'components/Form'
import Input from 'components/Input'
import PlayerStatsForm from 'components/PlayerStatsForm'
import Section from 'components/Section'
import Select from 'components/Select'
import Button from 'components/Button'
import type { PlayerStats } from 'types/PlayerStats'
import { useAllTeams } from 'api/teams'
import { useAllPlayers } from 'api/players'

type PlayerStatsArray = {
  [key: number]: PlayerStats
}

type TeamFormFields =
  | 'team_home_id'
  | 'team_home_score'
  | 'team_away_id'
  | 'team_away_score'

export default function MatchCreate() {
  const { isSuccess: isSuccessPlayers, data: players } = useAllPlayers()
  const { isSuccess: isSuccessTeams, data: teams } = useAllTeams()

  const [homeTeamId, setHomeTeamId] = useState<number>()
  const [homeTeamScore, setHomeTeamScore] = useState<number>()
  const [awayTeamId, setAwayTeamId] = useState<number>()
  const [awayTeamScore, setAwayTeamScore] = useState<number>()
  const [playersData, setPlayersData] = useState<PlayerStatsArray>([])

  const playersCount = useMemo(
    () => Object.keys(playersData).length,
    [playersData],
  )

  const addNewPlayer = () => {
    setPlayersData((current) => {
      const updatedForms = { ...current }
      const newPlayerFormIndex = playersCount

      updatedForms[newPlayerFormIndex] = {
        kills: 0,
        deaths: 0,
        assists: 0,
        headshots: 0,
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

  const handleTeamFormChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const setters = {
      team_home_id: setHomeTeamId,
      team_home_score: setHomeTeamScore,
      team_away_id: setAwayTeamId,
      team_away_score: setAwayTeamScore,
    }

    setters[name as TeamFormFields](parseInt(value))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(
      homeTeamId,
      homeTeamScore,
      awayTeamId,
      awayTeamScore,
      playersData,
    )
  }

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
            onChange={handleTeamFormChange}
          />
          <Input
            name="team_home_score"
            type="number"
            placeholder="Home Score"
            className="w-0 grow-[4]"
            onChange={handleTeamFormChange}
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
            onChange={handleTeamFormChange}
          />
          <Input
            name="team_away_score"
            type="number"
            placeholder="Away Score"
            className="w-0 grow-[4]"
            onChange={handleTeamFormChange}
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

      <Button type="submit">Create</Button>
    </Form>
  )
}
