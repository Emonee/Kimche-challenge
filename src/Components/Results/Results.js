import Result from "../Result/Result"

export default function Results(props) {
  const { data, input } = props

  if (!input) return

  try {
    const regExpString = input.trim()
    const regExp = new RegExp(`^${regExpString}`, 'ig')

    const totalCountries = data
      .map(array => array[1].filter(country => regExp.test(country.name)))
      .flat()

    if (!totalCountries.length) return <p>No countries founds</p>
    
    return (
      data.map(groupCountries => {
        const group = groupCountries[0]
        const countries = groupCountries[1].filter(country => regExp.test(country.name))
        return <Result key={group} groupBy={group} countries={countries} />
      })
    ) 
  } catch (error) {
    console.log(error);
    return <p>No countries founds</p>
  }  
}
