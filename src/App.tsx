import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./about"

const data: string[] = ["a", "b", "c","d",""]

function App() {
  //const [count, setCount] = useState(0)
  const [state,setState] = useState<string>("test");

  return (
    <div className='main'>
      <h1>Hello react</h1>
      <About data={data} func={setState} />
      <h1>{state}</h1>
      <input onChange={(e) => setState(e.target.value)}/>
      <button onClick={() => setState("State set")}>click message</button>
      {/*data.map((item,idx) => (
        <h4 key={idx}>{item}</h4>
      ))*/}
      {/*data.map((item, idx) => {
        if (item === "a") return <h4 key={idx}>AAA</h4>;
        else return <h4 key={idx}>{item}</h4>;
      })*/}
    </div>
  )
}

export default App;
