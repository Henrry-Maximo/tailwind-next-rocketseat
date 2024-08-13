'use client'

import { ComponentProps, createContext, useContext, useId, useState } from 'react'

// Root accept elements <div> / extract props of div
export type RootProps = ComponentProps<'div'>

// creating context typing for input
type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
}

// state of input / object null / type
const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  // hook -> user id unique
  const id = useId();
  const [ files, setFiles ] = useState<File[]>([]) 

  // without chance of typing ´setFiles´

  // disponibiliza o ID, os arquivos selecionados e a função setFiles para todos 
  // os componentes descendentes que utilizam esse contexto.
  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)