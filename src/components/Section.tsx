import { PropsWithChildren } from 'react'

type SectionProps = {
  title: string
}

export default function Section({
  title,
  children,
}: PropsWithChildren<SectionProps>) {
  return (
    <div className="flex flex-col gap-3">
      <p className="my-3 ps-3 border-s-2 font-semibold">{title}</p>
      {children}
    </div>
  )
}
