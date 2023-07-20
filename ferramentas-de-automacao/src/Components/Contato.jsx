import React from 'react'
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title='Ranked | Contato' description='Entre em contato' />
      <img src={foto} />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>vittor@gmail.com</li>
          <li>11988358944</li>
          <li>Rua xpto</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato