import { ChangeEvent, ChangeEventHandler, useState } from 'react'
import Input from 'components/Input'
import Select from 'components/Select'
import { usePlayers } from 'hooks/players'
import type { PlayerStats } from 'types/PlayerStats'

type PlayerStatsFormProps = {
  formIndex: number
  onFormChange: (formIndex: number, playerData: Partial<PlayerStats>) => void
}

export default function PlayerStatsForm({
  formIndex,
  onFormChange,
}: PlayerStatsFormProps) {
  const { players } = usePlayers()

  const handleFormChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onFormChange(formIndex, { [name]: value })
  }

  return (
    <div className="flex flex-col gap-3 mb-3">
      <Select
        name="player_id"
        options={players.map(({ id, name }) => ({
          name,
          value: id.toString(),
        }))}
        onChange={handleFormChange}
      />

      <div className="flex gap-2">
        <Input
          name="kills"
          type="number"
          placeholder="Kills"
          className="w-0 grow"
          onChange={handleFormChange}
        />
        <Input
          name="deaths"
          type="number"
          placeholder="Deaths"
          className="w-0 grow"
          onChange={handleFormChange}
        />
        <Input
          name="assists"
          type="number"
          placeholder="Assists"
          className="w-0 grow"
          onChange={handleFormChange}
        />
        <Input
          name="headshots"
          type="number"
          placeholder="Headshots"
          className="w-0 grow"
          onChange={handleFormChange}
        />
      </div>
    </div>
  )
}
