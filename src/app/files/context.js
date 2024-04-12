import { createContext, useContext } from 'react'
import { useFetch } from '../hooks/fetch.js'

const FilesContext = createContext()

export const FilesProvider = ({ children }) => {
  const { data, loading, error } = useFetch('http://localhost:8080/api/v1/files')

  return (
    <FilesContext.Provider value={{ files: data, loading, error }}>
      {children}
    </FilesContext.Provider>
  )
}

export const useFiles = () => useContext(FilesContext)
