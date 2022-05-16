import styles from './Results.module.css'

import Card from "../Card/Card";

export default function Results(props) {
  const continent = props.data[0]
  const countries = props.data[1]

  // console.log(continent)
  
  return (
    <>
      <h3>{continent}</h3>
      <div className={styles.cardsContainer}>
        {countries.map(country => <Card key={country.name} data={country}/>)}
      </div>
    </>
  )
}