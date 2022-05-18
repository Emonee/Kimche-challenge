import styles from './GroupByButton.module.css'

export default function GroupByButton(props) {
  const isActive = props.groupBy === props.text
  const isActiveStyle = {
    backgroundColor: 'var(--focus-color)',
    color: 'white'
  }
  const buttonStyle = isActive ? isActiveStyle : {}

  return (
    <button
      onClick={props.onClick}
      className={styles.labelButton}
      style={buttonStyle}
    >
      {props.text}
    </button>
  )
}
