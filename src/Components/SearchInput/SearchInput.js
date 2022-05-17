import styles from './SearchInput.module.css'

export default function SearchInput(props) {
  return (
    <div>
      <input value={props.value} onChange={props.onChange} className={styles.input}></input>
      <i className={`bi bi-search ${styles.searchIcon}`}></i>
    </div>
  )
}