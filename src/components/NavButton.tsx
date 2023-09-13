import Link from 'next/link'

type NavButttonProps = {
  title: string
  destination: string
}

export default function NavButton({ title, destination }: NavButttonProps) {
  return (
    <Link href={destination} className="p-5 bg-blue-500 rounded-lg">
      {title}
    </Link>
  )
}
