import { PropsWithChildren } from 'react'

type SectionProps = {
  title: string
}

export default function Section({
  title,
  children,
}: PropsWithChildren<SectionProps>) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="my-3 ps-3 border-s-2 font-semibold">{title}</h2>
      {children}
    </section>
  )
}
