import Link from 'next/link'

type StatProps = {
  description: string
  value: number
}

export default function Stat({ description, value }: StatProps) {
  return (
    <Link href="/teams/create">
      <div className="border-2 border-black hover:border-white px-5 py-2 rounded-md">
        <p>
          <span className="text-4xl font-semibold">{value}</span>{' '}
          <span className="align-super font-semibold">{description}</span>
        </p>
      </div>
    </Link>
  )
}