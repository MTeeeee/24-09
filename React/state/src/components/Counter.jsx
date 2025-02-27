import { useState } from 'react'

function Counter() {

  const [count, setCount] = useState(0)

  let countUp = () => {
    setCount(prevCount => prevCount + 1)
  }

  let countDown = () => {
    setCount(count - 1)
  }

  let countReset = () => {
    setCount(0)
  }

  return (
    <div>
        <h2>Hello from Counter!</h2>
        <p>{count}</p>
        <button onClick={countUp}>up</button>
        <button onClick={countDown}>down</button>
        <button onClick={countReset}>reset</button>
    </div>
  )
}

export default Counter