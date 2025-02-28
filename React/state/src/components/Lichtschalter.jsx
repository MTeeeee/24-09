import { useState } from 'react'

function Lichtschalter() {

  const [light, setLight] = useState("Aus")

  const lightOn = () => {
    setLight("An")
  }

  const lightOff = () => {
    setLight("Aus")
  }

  const lightSwitch = () => {

    light == "An" ? setLight("Aus") : setLight("An")

    // if (light == "An") {
    //   setLight("Aus")
    // } else {
    //   setLight("An")
    // }

  }



  return (
    <div>
      <h2>Lichtschalter</h2>
      <p>Licht ist: {light}</p>
      <button onClick={lightOn}>An</button>
      <button onClick={lightOff}>Aus</button>
      <button onClick={lightSwitch}>💡</button>
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