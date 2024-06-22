import { useState } from 'react'
import './App.css'
import CodeEditor from './components/CodeEditor'
import AstProgram from './components/AstProgram'

function App() {
  const [code, setCode] = useState("// paste code here\n\nconst hello = \"oe\"")
  return (
    <>
      <h1>Astral: Hello!</h1>
      <div className="card">
        <CodeEditor code={code} setCode={setCode} />
      </div>
      <AstProgram code={code} />
    </>
  )
}

export default App
