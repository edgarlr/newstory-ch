const API_URL = 'https://swapi.dev/api'

// Helper to fetch data
export async function fetchAPI(path: string) {
  try {
    const response = await fetch(`${API_URL}${path}`)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Error trying to fetch')
  }
}

export async function getCharacters() {
  const { results } = await fetchAPI('/people')
  if (!results) return []
  return results
}
