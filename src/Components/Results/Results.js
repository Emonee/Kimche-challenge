import styles from './Results.module.css'

import Card from "../Card/Card";

export default function Results(props) {  
  try {
    const regExpString = props.input.trim()
    const regExp = new RegExp(`^${regExpString}`, 'ig')    
    const continent = props.data[0]
    const countries = props.data[1].filter(country => regExp.test(country.name))
    
    if(!regExpString) return
    if(countries.length < 1) return
    else return (
      <>
        <h3>{continent}</h3>
        <div className={styles.cardsContainer}>
          {countries.map(country => <Card key={country.name} data={country}/>)}
        </div>
      </>
    )
  } catch (error) {
    return
  }  
}