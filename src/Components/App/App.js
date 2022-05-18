import { useState } from 'react';

import './App.css';

import Header from "../Header/Header";
import SearchInput from "../SearchInput/SearchInput";
import GroupBy from "../GroupBy/GroupBy";
import ResultsLogic from '../ResultsLogic/ResultsLogic';

export default function App() {
  const [groupBy, setGroupBy] = useState('continent')
  const groupByContinent = () => setGroupBy('continent')
  const groupByLanguage = () => setGroupBy('language')

  const [searchInput, setSearchInput] = useState('')
  const handleChange = e => setSearchInput(e.target.value)

  return (
    <>
      <Header />
      <SearchInput value={searchInput} onChange={handleChange} />
      <GroupBy groupBy={groupBy} groupByContinent={groupByContinent} groupByLanguage={groupByLanguage} />
      <ResultsLogic groupBy={groupBy} searchInput={searchInput} />
    </>
  );
}
