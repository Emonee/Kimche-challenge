import styles from './GroupBy.module.css'

import GroupByRadioButton from '../GroupByRadioButton/GroupByRadioButton'

export default function GroupBy() {
  return (
    <section className={styles.groupBy}>
      <h3>Group By:</h3>
      <GroupByRadioButton text="continent" />
      <GroupByRadioButton text="language" />
    </section>
  )
}