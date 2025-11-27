import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>Krish How are You!</h1>
      <button className='btn'>Click Me</button>
    </div>
  )
}

export default Header
