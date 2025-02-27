import { useState } from 'react'

function Lichtschalter() {

  const [light, setLight] = useState("Aus")

  const lightOn = () => {
    setLight("An")
  }
  const lightOff = () => {
    setLight("Aus")
  }

  return (
    <div>Lichtschalter
        <p>Das Licht ist: {light}</p>
        <button onClick={lightOn}>💡</button>
        <button onClick={lightOff}>☠️</button>
    </div>
  )
}

export default Lichtschalter


// Lichtschalter

// Es soll ein p-tag oder ähnlich geben
// Das sagt Licht ist: An/Aus

// Es soll zwei Buttons geben
// Einer An (setzt den Text oben auf An)
// Einer Aus (setzt den Text oben auf Aus)