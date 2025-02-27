import { useState } from 'react'

function Post() {

    const [count, setCount] = useState(0)

    const like = () => {
        setCount(count + 1);
    }

    const dislike = () => {
        if (count > 0) {
            setCount(count - 1);
        }
        
    }

  return (
    <div>Comment
        <p>{count}</p>
        <button onClick={like}>👍</button>
        <button onClick={dislike}>👎</button>
    </div>
  )
}

export default Post


// Eine neue Komponente, 
// die aussieht wie ein Kommentar mit Text

// Darunter soll es einen Zähler geben einen Like Button
// und einen Dislike Button

// Like = counter + 1
// Dislike = counter - 1

// counter darf nicht < 0