const secureKey = process.env.REACT_APP_SCHOOLS_API_KEY;

const fetchSchoolsInfo = () => {
  return fetch(`https://api.data.gov/ed/collegescorecard/v1/schools.json?school.state=CO&api_key=${secureKey}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
}

export { fetchSchoolsInfo }