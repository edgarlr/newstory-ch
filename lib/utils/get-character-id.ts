export const getCharacterId = (url: string) => {
  const normalizedString = url.endsWith('/') ? url.slice(0, -1) : url
  return normalizedString.substring(normalizedString.lastIndexOf('/') + 1)
}
