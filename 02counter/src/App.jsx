import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(10)

  //let counter = 10

  const addValue = () => {
    //counter = counter + 1
    if(counter >= 20){
      setCounter(20)
    }else{
      setCounter(counter => counter + 1)
    }
  }

  const removeValue = () => {
    if(counter <= 0){
      setCounter(0)
    }else{
      setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <h1>Learn Everyday !</h1>
      <h2>In this, Values can't go less than 0 and more than 20</h2>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App