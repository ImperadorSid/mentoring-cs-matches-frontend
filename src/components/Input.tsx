import { InputHTMLAttributes } from 'react'

export default function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className={`bg-gray-800 p-2 rounded-md ${className}`} {...props} />
  )
}
