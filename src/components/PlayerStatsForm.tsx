import { ChangeEvent, ChangeEventHandler, useState } from 'react'
import Input from 'components/Input'
import Select from 'components/Select'
import type { PlayerStats } from 'types/PlayerStats'
import type { Player } from 'types/Player'

type PlayerStatsFormProps = {
  formIndex: number
  availablePlayers: Player[]
  onFormChange: (formIndex: number, playerData: Partial<PlayerStats>) => void
}

export default function PlayerStatsForm({
  formIndex,
  availablePlayers,
  onFormChange,
}: PlayerStatsFormProps) {
  const handleFormChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onFormChange(formIndex, { [name]: value })
  }

  return (
    <div className="flex flex-col gap-3 mb-3">
      <Select
        name="player_id"
        options={availablePlayers.map(({ id, name }) => ({
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
