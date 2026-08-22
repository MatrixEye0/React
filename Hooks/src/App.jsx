import { useState, useCallback } from 'react'
import './App.css'
import Fetch from './components/axios'
import RefHook from './components/refHook'
import Memo from './components/memoHook'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPass] = useState("")
  

  const passGenrate = useCallback(() => { //useCallback freez the function and not re render agar depedence triger hogi tabhi unfreez hoga.
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPass(pass)
  }, [length, number, char])

  return (
    <>
      <>
  <div className="min-h-screen bg-gray-100 p-8">

    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">

      <div className="w-full md:w-1/2 bg-gray-800 rounded-xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Password Generator
        </h1>
        <div className="flex mb-6">
          <input
            type="text"
            value={password}
            placeholder="Your password"
            readOnly
            className="w-full px-4 py-3 rounded-l-lg outline-none bg-gray-100 text-gray-800 font-medium"/>

          <button
            onClick={() => navigator.clipboard.writeText(password)}
            className="px-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-r-lg">
            Copy
          </button>
        </div>

        <div className="mb-5">

          <div className="flex justify-between text-white mb-2">
            <label>Password Length</label>
            <span className="font-bold">{length}</span>
          </div>

          <input
            type="range"
            min="6"
            max="100"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer" />

        </div>

        <div className="flex gap-6 text-white mb-6">

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={number}
              onChange={(e) => setNumber(e.target.checked)}
              className="w-4 h-4"/>
            Numbers
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={char}
              onChange={(e) => setChar(e.target.checked)}
              className="w-4 h-4"
            />
            Characters
          </label>

        </div>

        <button
          onClick={passGenrate}
          className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition">
          Generate Password
        </button>
      </div>

      <div className="w-full md:w-1/2 bg-white rounded-xl shadow-2xl p-6">

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Posts
        </h2>

        <Fetch />
        <RefHook/>
      </div>
      <Memo/>
    </div>
  </div>
</>
    </>
  )
}

export default App