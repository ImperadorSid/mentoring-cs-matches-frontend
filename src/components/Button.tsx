import { ButtonHTMLAttributes } from 'react'

export default function Button({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={`bg-blue-500 p-2 rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
