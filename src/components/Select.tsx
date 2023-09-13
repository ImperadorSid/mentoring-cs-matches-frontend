import { SelectHTMLAttributes } from 'react'

type SelectProps = {
  options: {
    name: string
    value: string
  }[]
} & SelectHTMLAttributes<HTMLSelectElement>

export default function Select({ options, className, ...props }: SelectProps) {
  return (
    <select className={`bg-gray-800 p-2 rounded-md ${className}`} {...props}>
      {options.map(({ name, value }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  )
}
