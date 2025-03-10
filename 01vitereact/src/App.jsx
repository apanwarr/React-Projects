import React from 'react';

import Prac from "./prac"

function App() {
  const username = "chai aur tabhai"

  return (
    <>  {/* ---  Fragment  ---  */}
      <Prac/>
      <h1>Hello! {username}</h1>    {/* --- {}  Evalutions Expressions- means final outcome  ---  */}
    </>
  )
}

export default App;
 