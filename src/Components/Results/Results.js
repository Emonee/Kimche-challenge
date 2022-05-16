import { useQuery, gql } from "@apollo/client";

import styles from './Results.module.css'

import Card from "../Card/Card";

const COUNTRIES_DATA_QUERY = gql`
  {
    countries {
      name,
      emoji,
      code,
      continent {name},
      languages {name},
      capital,
      currency,
      phone
    }
  }
`;

export default function Results() {
  const { data, loading, error } = useQuery(COUNTRIES_DATA_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  else return (
    <>
      <h3>Spanish</h3>
      <div className={styles.cardsContainer}>
        {data.countries.map(country => <Card key={country.name} data={country}/>)}
      </div>
    </>
  )
}