import NavButton from 'components/NavButton'
import Section from 'components/Section'
import Header from 'components/Header'

export default function Home() {
  return (
    <>
      <Header title="CS Matches" showBackButton={false} />

      <Section title="Create new">
        <nav className="flex gap-3">
          <NavButton title="Team" destination="/teams/create" />
          <NavButton title="Player" destination="/players/create" />
          <NavButton title="Match" destination="/matches/create" />
        </nav>
      </Section>
    </>
  )
}
