import NavButton from 'components/NavButton'
import Section from 'components/Section'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-semibold">CS Matches</h1>

      <Section title="Dashboard (TODO!)"></Section>

      <Section title="Create new">
        <nav className="flex gap-3">
          <NavButton title="Team" destination="/team/create" />
          <NavButton title="Player" destination="/player/create" />
          <NavButton title="Match" destination="/match/create" />
        </nav>
      </Section>
    </>
  )
}
