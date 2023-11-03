import React, {useState} from 'react'
import styles from './Greeting.module.css'

function Greeting() {
  const [msgShown, setMsgShown] = useState(false);
  return (
    <div>
        <button onClick={() => setMsgShown(current => !current)}>
          {msgShown ? 'Goodby' : 'Hello'}</button>
        <h3 className={msgShown ? styles.show : styles.hidden}>
          {msgShown ? 'Hi There' : ''}
        </h3>
    </div>
  )
}

export default Greeting