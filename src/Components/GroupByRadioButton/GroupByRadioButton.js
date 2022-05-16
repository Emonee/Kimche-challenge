import styles from './GroupByRadioButton.module.css'

export default function GroupByRadioButton(props) {
  return (
    <>
      <input
        type="radio"
        name='group-by'
        id={props.text}
        style={{display: 'none'}}
      ></input>
      <label
        for={props.text}
        className={styles.labelButton}
      >
        {props.text}
      </label>
    </>
  )
}