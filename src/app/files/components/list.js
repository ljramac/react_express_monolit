import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useFiles } from '../context.js'

const Files = () => {
  const { files, loading } = useFiles()

  if (loading) {
    return <div>{Array(5).fill().map((_, index) => <Skeleton key={index} height={30} count={3} />)}</div>
  }

  return (
    <div>
      {files.map((file, index) => (
        <div key={index}>
          <h3>{file.filename}</h3>
        </div>
      ))}
    </div>
  )
}

export default Files
