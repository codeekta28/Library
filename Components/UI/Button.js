import React from 'react'
import styles from "../../styles/Button.module.css"

function Button(props) {
  return (
    <button type='button' onClick={props.onClick} className={`${props.className} ${styles.button}`}>
    {props.children}
  </button>
  )
}

export default Button