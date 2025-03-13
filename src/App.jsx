import { useState } from 'react'
import HomePage from './pages/HomePage';

function App() {
  
  document.body.style.backgroundColor = "#87b5b5";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        minHeight: "100%",
        height: "auto",
        margin: "0px"
      }}
    >
      <HomePage />
    </div>
  )
}

export default App
