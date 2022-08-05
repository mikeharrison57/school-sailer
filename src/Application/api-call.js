const secureKey = process.env.REACT_APP_SCHOOLS_API_KEY;
const primaryUrl = 'https://api.data.gov/ed/collegescorecard/v1/schools.json?'

const fetchSchoolsInfo = state => {
  return fetch(`${primaryUrl}school.state=${state}&api_key=${secureKey}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
}

const fetchIndividualSchool = schoolName => {
  return fetch(`${primaryUrl}school.state=${schoolName}&api_key=${secureKey}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
}

export { fetchSchoolsInfo }