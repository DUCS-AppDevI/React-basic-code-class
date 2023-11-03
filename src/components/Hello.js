import React from 'react'
import styles from './Hello.module.css'

function Hello(props) {
  return (
    <h1 className={styles.helloGreeting}>Hello {props.name}!</h1>
  )
}

export default Hello