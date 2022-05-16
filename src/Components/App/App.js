import { useState } from 'react';
import { useQuery, gql } from "@apollo/client";

import './App.css';

import Header from "../Header/Header";
import SearchInput from "../SearchInput/SearchInput";
import GroupBy from "../GroupBy/GroupBy";
import Results from "../Results/Results";

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

function App() {
  const [groupBy, setGroupBy] = useState('continent');
  const groupByContinent = () => {
    setGroupBy('continent')
  }
  const groupByLanguage = () => {
    setGroupBy('language')
  }

  const { data, loading, error } = useQuery(COUNTRIES_DATA_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  const countriesGroupByContinent = data.countries.reduce((prev, curr) => {
    const continent = curr.continent.name
    if(prev[continent]) prev[continent].push(curr)
    else prev[continent] = [curr]
    return prev
  }, {});

  const countriesGroupByLanguage = data.countries.reduce((prev, curr) => {
    const languages = curr.languages
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

  const continentsResults = Object.entries(countriesGroupByContinent).map(continentWithCountries => <Results key={continentWithCountries[0]} data={continentWithCountries}/>)
  const languagesResults = Object.entries(countriesGroupByLanguage).map(languageWithCountries => <Results key={languageWithCountries[0]} data={languageWithCountries}/>)

  const selectedResults = () => {
    if(groupBy === 'continent') return continentsResults
    if(groupBy === 'language') return languagesResults
  }

  return (
    <>
      <Header />
      <SearchInput />
      <GroupBy groupBy={groupBy} groupByContinent={groupByContinent} groupByLanguage={groupByLanguage} />
      {groupBy && selectedResults()}
    </>
  );
}

export default App;
