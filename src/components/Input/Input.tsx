import { ComponentProps } from 'react'

export interface InputProps {}

// extender todas as propriedades da div para o Input
type InputPrefixProps = ComponentProps<'div'>
export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>
export function InputControl(props: InputControlProps) {
  return (
    <input
      className="border-0bg-transparent flex-1 p-0 text-zinc-900 placeholder-zinc-600 outline-0"
      {...props}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>
export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}

// Radix vs Shadcn/UI
// import * as Input from '../Input'

// export {
//   Prefix: InputPrefix,
//   Control: InputControl,
//   Root: InputRoot
// }
