import { useQuery, gql } from "@apollo/client";

import Results from "../Results/Results";

const COUNTRIES_DATA_QUERY = gql`
{
  countries {
    name,
    emoji,
    code,
    continent { name },
    languages { name },
    capital,
    currency,
    phone
  }
}
`;

export default function ResultsLogic(props) {
  const { groupBy, searchInput } = props
  const { data, loading, error } = useQuery(COUNTRIES_DATA_QUERY);

  if (loading) return "Loading..."
  if (error) return (
    <pre>Something in the app went wrong. For asistance:{' '}
      <a href="https://github.com/Emonee/Kimche-challenge">
        Click here
      </a>
    </pre>
  )

  // object with key: value => continentName: [ { countryInfo1 }, { countryInfo2 } ... ]
  const countriesGroupByContinent = data.countries.reduce((prev, curr) => {
    const continent = curr.continent.name
    if(prev[continent]) prev[continent].push(curr)
    else prev[continent] = [curr]
    return prev
  }, {});

  // object with key: value => languageName: [ { countryInfo1 }, { countryInfo2 } ... ]
  const countriesGroupByLanguage = data.countries.reduce((prev, curr) => {
    const languages = curr.languages
    if(languages.length < 1 && prev['No official language']) {
      prev['No official language'] = prev['No official language'].push(curr)
      return prev
    }
    if(languages.length < 1) {
      prev['No official language'] = [curr]
      return prev
    }
    languages.forEach(language => {
      if(prev[language.name]) prev[language.name].push(curr)
      else prev[language.name] = [curr]
    });
    return prev
  }, {});

  const formatCountries = () => {
    if (groupBy === 'continent') return Object.entries(countriesGroupByContinent)
    if (groupBy === 'language') return Object.entries(countriesGroupByLanguage)
  }

  return searchInput && <Results input={searchInput} data={formatCountries()} />
}
