import Files from './files/components/list.js'
import { FilesProvider } from './files/context.js'
import './App.css'

function App () {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <FilesProvider>
          <Files />
        </FilesProvider>
      </main>
    </div>
  )
}

export default App
