import styles from './Result.module.css'

import Card from "../Card/Card";

export default function Result(props) {
  const { groupBy, countries } = props

  if (countries.length < 1) return

  return (
    <>
      <h3>{groupBy}</h3>
      <div className={styles.cardsContainer}>
        {countries.map(country => <Card key={country.name} data={country}/>)}
      </div>
    </>
  )
}
