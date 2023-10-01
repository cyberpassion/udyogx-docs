import { useState } from 'react'
import styles from './counters.module.css'

function CardButton() {
  return (
    <div>
      <button>
        Clicked
      </button>
    </div>
  )
}

export default function Cards() {
  return <CardButton />
}
