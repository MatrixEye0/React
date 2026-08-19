import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPass] = useState("")

  const passGenrate = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*(){}<>:~`,.;'[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPass(pass)
  }, [length, number, char])

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex justify-center items-start pt-20">
        <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-6">
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
              className="px-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-r-lg" > Copy </button>
            </div>

          <div className="mb-5">
            <div className="flex justify-between text-white mb-2">
              <label>Password Length</label>
              <span className="font-bold">{length}</span>
          </div>
            <input
              type="range"
              min="6"
              max="30"
              value={length}
              onChange={(prev) => !prev}
              className="w-full cursor-pointer" />
          </div>

         
          <div className="flex gap-6 text-white mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={number}
                onChange={(e) => !e}
                className="w-4 h-4"/> Numbers </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={char}
                onChange={(e) => !e}
                className="w-4 h-4"/> Characters </label>
          </div>

          <button
            onClick={passGenrate}
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition"> Generate Password </button>

        </div>
      </div>
    </>
  )
}

export default App