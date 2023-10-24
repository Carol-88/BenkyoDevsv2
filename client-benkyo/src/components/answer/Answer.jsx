import React from 'react'
import styles from './answer.module.css'

function Answer() {
  return (
    <section className={styles.options}>
    <div className={styles.text}>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores velit saepe numquam ex quos.
    </p>
    <button className={styles.btnansw}>
        Responder
    </button>
    </div>

    <div className={styles.text}>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores velit saepe numquam ex quos.
    </p>
    <button className={styles.btnansw}>
        Responder
    </button>
    </div>

</section>
  )
}

export default Answer