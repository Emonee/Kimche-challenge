import styles from './SearchInput.module.css'

export default function SearchInput() {
  return (
    <div>
      <input className={styles.input}></input>
      <i className={`bi bi-search ${styles.searchIcon}`}></i>
    </div>
  )
}