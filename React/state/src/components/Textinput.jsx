import { useState } from 'react'

function Textinput() {

    const [text, setText] = useState("")

    const handleChange = (event) => {
        console.log(event)
        setText(event.target.value)
    }

  return (
    <div>
        <input type="text" onChange={handleChange} value={text}/>
        <br />
        <p>Dein Name ist: {text}</p>

    </div>
  )
}

export default Textinput