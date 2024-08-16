'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

// Root accept elements <div> / extract props of div
export type RootProps = ComponentProps<'div'>

// creating context typing for input
type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

// state of input / object null / type
const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  // hook -> user id unique
  const id = useId()
  // armazenar os arquivos
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  // without chance of typing ´setFiles´

  // disponibiliza o ID, os arquivos selecionados e a função setFiles para todos
  // os componentes descendentes que utilizam esse contexto.
  // Provider -> prover as informações.
  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
