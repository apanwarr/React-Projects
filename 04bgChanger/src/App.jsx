import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}} > 
      <h1 className="text-violet px-60 py-60 text-center text-5xl font-bold">Background Changer!</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-1 rounded-2xl">
          <button 
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{backgroundColor: "red"}}>Red</button>          <button 
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button 
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{backgroundColor: "green"}}>Green</button>
          <button 
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer" style={{backgroundColor: "black"}}>Black</button>
          <button 
          onClick={() => setColor("white")}
          className="outline-none px-4 py-1 rounded-full text-wine shadow-lg cursor-pointer" style={{backgroundColor: "white"}}>White</button>
          <button 
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-wine shadow-lg cursor-pointer" style={{backgroundColor: "blue"}}>Blue</button>
          <button 
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-wine shadow-lg cursor-pointer" style={{backgroundColor: "pink"}}>Pink</button>
          <button 
          onClick={() => setColor("grey")}
          className="outline-none px-4 py-1 rounded-full text-wine shadow-lg cursor-pointer" style={{backgroundColor: "grey"}}>Grey</button>
          <button 
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-wine shadow-lg cursor-pointer" style={{backgroundColor: "purple"}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
