import styles from './GroupBy.module.css'

import GroupByButton from '../GroupByButton/GroupByButton'

export default function GroupBy(props) {
  return (
    <section className={styles.groupBy}>
      <h3>Group By:</h3>
      <GroupByButton groupBy={props.groupBy} onClick={props.groupByContinent} text="continent" />
      <GroupByButton groupBy={props.groupBy} onClick={props.groupByLanguage} text="language" />
    </section>
  )
}