import { FormHTMLAttributes, PropsWithChildren } from 'react'
import Header from 'components/Header'

type FormProps = {
  title: string
} & FormHTMLAttributes<HTMLFormElement>

export default function Form({
  title,
  children,
  ...props
}: PropsWithChildren<FormProps>) {
  return (
    <>
      <Header title={title} />

      <form className="flex flex-col gap-4" {...props}>
        {children}
      </form>
    </>
  )
}
