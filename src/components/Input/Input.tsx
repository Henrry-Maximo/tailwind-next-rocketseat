import { ComponentProps } from 'react'

// extender todas as propriedades da div para o Input
type InputPrefixProps = ComponentProps<'div'>

// imagem do input
export function Prefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>
export function Control(props: InputControlProps) {
  return (
    <input
      className="border-0bg-transparent flex-1 p-0 text-zinc-900 placeholder-zinc-600 outline-0"
      {...props}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>
export function Root(props: InputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}

// export const InputProps = {
//   Prefix: InputPrefix,
//   Control: InputControl,
//   Root: InputRoot,
// }

// Radix vs Shadcn/UI
// import * as Input from '../Input'

// export {
//   Prefix: InputPrefix,
//   Control: InputControl,
//   Root: InputRoot
// }