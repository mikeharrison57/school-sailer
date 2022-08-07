const secureKey = process.env.REACT_APP_SCHOOLS_API_KEY;
const primaryUrl = 'https://api.data.gov/ed/collegescorecard/v1/schools.json?'

const fetchSchoolsInfo = async state => {
  const response = await fetch(`${primaryUrl}school.state=${state}&api_key=${secureKey}`)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const responseJson = await response.json();
  return responseJson
}

const fetchIndividualSchool = async schoolName => {
  const response = await fetch(`${primaryUrl}school.name=${schoolName}&api_key=${secureKey}`)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const responseJson = await response.json();
  return responseJson
}

export { fetchSchoolsInfo, fetchIndividualSchool }