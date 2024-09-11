import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export interface TextareaProps extends ComponentProps<'textarea'> {}

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className={twMerge(
        'min-h-32 w-full resize-y px-3 py-2 shadow-sm outline-none',
        'rounded-lg border border-zinc-300',
        'focus:border-violet-300 focus:ring-4 focus:ring-violet-100',
        'dark:border-zinc-300 dark:bg-zinc-800 dark:focus:border-violet-500 dark:focus:ring-violet-500/20',
        'dark:text-zinc-100 dark:placeholder-zinc-400',
      )}
      {...props}
    />
  )
}
