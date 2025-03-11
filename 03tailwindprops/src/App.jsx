import { useState } from 'react'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "ashish",
    age : 22
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-1 rounded-xl text-center'>Tailwind Test</h1>
      <Card username="Ashish" btnText="learn me"/>
      <Card username="Abhishek" btnText="visit me"/>
      <Card username="Amit" btnText="click me"/>
      <Card username="Amit" />
    </>
  )
}

export default App
