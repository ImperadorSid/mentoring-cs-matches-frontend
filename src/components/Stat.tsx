import Link from 'next/link'

type StatProps = {
  description: string
  value: number
  destination?: string
}

export default function Stat({
  description,
  value,
  destination = '/',
}: StatProps) {
  return (
    <Link href={destination}>
      <p className="border-2 border-black hover:border-white rounded-md  p-2">
        <span className="text-2xl font-semibold">{value}</span>{' '}
        <span className="align-text-bottom font-semibold">{description}</span>
      </p>
    </Link>
  )
}
