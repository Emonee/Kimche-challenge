import styles from './GroupBy.module.css'

import GroupByRadioButton from '../GroupByRadioButton/GroupByRadioButton'

export default function GroupBy() {
  return (
    <section className={styles.groupBy}>
      <h2>Group By:</h2>
      <GroupByRadioButton text="Continent" />
      <GroupByRadioButton text="Language" />
    </section>
  )
}