import styles from './Card.module.css'

export default function Card(props) {
  const { data } = props

  const languagesConcatString = data.languages.map(language => language.name).join(', ')

  return (
    <div className={styles.card}>
      <p className='primary-text'>{data.emoji} {data.name} ({data.code})</p>
      <ul className='secondary-text'>
        <li>Continent: {data.continent.name}</li>
        <li>Language(s): {data.languages.length > 0 ? languagesConcatString : 'None'}.</li>
        <li>Capital: {data.capital ? data.capital : 'None'}</li>
        <li>Currency: {data.currency ? data.currency : 'None'}</li>
        <li>Phone code: {data.phone}</li>
      </ul>
    </div>
  )
}