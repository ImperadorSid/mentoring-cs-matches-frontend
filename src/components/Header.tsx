import Link from 'next/link'

type HeaderProps = {
  title: string
  showBackButton?: boolean
}

export default function Header({ title, showBackButton = true }: HeaderProps) {
  return (
    <header>
      {showBackButton && (
        <Link href="/" className="hover:underline">
          Back
        </Link>
      )}
      <h1 className="text-3xl font-semibold">{title}</h1>
    </header>
  )
}
