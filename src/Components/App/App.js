import { useState } from 'react'

import './App.css';

import Header from "../Header/Header";
import SearchInput from "../SearchInput/SearchInput";
import GroupBy from "../GroupBy/GroupBy";
import Results from "../Results/Results";

function App() {
  const [groupBy, setGroupBy] = useState(null);
  const groupByContinent = () => {
    setGroupBy('continent')
  }
  const groupByLanguage = () => {
    setGroupBy('language')
  }

  return (
    <>
      <Header />
      <SearchInput />
      <GroupBy groupBy={groupBy} groupByContinent={groupByContinent} groupByLanguage={groupByLanguage} />
      {groupBy ? groupBy : 'Null'}
      <Results />
    </>
  );
}

export default App;
