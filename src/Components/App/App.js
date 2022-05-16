import { useQuery, gql } from "@apollo/client";

import './App.css';

import Header from "../Header/Header";
import SearchInput from "../SearchInput/SearchInput";
import GroupBy from "../GroupBy/GroupBy";

const COUNTRIES_DATA_QUERY = gql`
  {
    countries {
      name,
      emoji,
      continent {
        name
      },
      code,    
      currency
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(COUNTRIES_DATA_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <>
      <Header />
      <SearchInput />
      <GroupBy />
      <h1 className="text-primary">My first gql query</h1>
      <ul>
        {data.countries.map(country => (
          <li key={country.name}>{country.name}: {country.continent.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
