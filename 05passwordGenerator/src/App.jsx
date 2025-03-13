import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  // const ref = useRef(initialValue)

  const passwordRef = useRef(null)

  // IMP-- useCallback is a React Hook that lets you cache a function definition between re-renders.
  // useCallback function ko memorize karta hai jitna ho sake
  // const cachedFn = useCallback(fn, dependencies)  --- format

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str  =  
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str = str + "0123456789"
    if(charAllowed) str = str + "!@#$%^&*-_+=[]{}~`()"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char)

    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])


  // copyPasswordClipboard--->
  const copyPasswordClipboard = useCallback( () => {
    passwordRef.current?.select();    
    // passwordRef.current?.setSelectionRange(0,3)      ---Imp-> for showing blue color in UI and using range selection
    window.navigator.clipboard.writeText(password)
  },[password])
  

  // IMP - useEffect is a React Hook that lets you synchronize a component with an external system.
  // IMP - jab bhi hamara page load hota hai toh sabse pehle useEffect() call hota hai aur dependencies array se kux bhi ched chaad hui yah kux badla toh bh mai wapis se re-run hojaoga..
  // useEffect(setup, dependencies?)

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-3 py-3 my-3 bg-gray-800 text-orange-500 ">
        <h1 className='text-white text-center my-3'>Password generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
        </div>
        <button
          onClick={copyPasswordClipboard}
          className='rounded-xl outline-none bg-blue-700 text-white px-3 py-0.5 
          shrink-0 cursor-pointer hover:bg-blue-400'
        >copy</button>

        <div className='flex text-sm gap-x-2 my-5'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label > Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          className='cursor-pointer'
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}/>
          <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  className='cursor-pointer'
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={() => {
                      setcharAllowed((prev) => !prev )
                  }}
              />
              <label htmlFor="characterInput">Special Characters</label>
          </div>
      </div>
    </div>
  )
}

export default App
