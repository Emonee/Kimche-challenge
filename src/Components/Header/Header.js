import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Country Search</h1>
      <p className="secondary-text">This is a basic app where you can make easy consults about countries.</p>
      <p className="secondary-text">Just type something and select a Group By type result. Then you will see all the countries that match with your input grouped by Continent or Language. Let's learn! 🤓</p>
    </header>
  )
}