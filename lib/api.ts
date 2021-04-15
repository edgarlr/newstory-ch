const API_URL = 'https://swapi.dev/api'

// Helper to fetch data
export async function fetchAPI(path: string) {
  try {
    const response = await fetch(`${API_URL}${path}`)
    const data = await response.json()
    return data
  } catch (error) {
    return null
  }
}

export async function getCharacters() {
  const { results } = await fetchAPI('/people')
  if (!results) return []
  return results
}

export async function getCharacterById(id: string) {
  const result = await fetchAPI(`/people/${id}`)
  if (!result) return null
  return result
}
