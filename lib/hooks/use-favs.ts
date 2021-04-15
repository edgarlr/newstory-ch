import { createContext, useContext } from 'react'

type FavsContextProps = {
  favs: TCharacter[]
  addToFavs: (character: TCharacter) => void
  removeFromFavs: (character: TCharacter) => void
}

export const FavsContext = createContext<FavsContextProps | null>(null)

export const useFavs = (): FavsContextProps => {
  const result = useContext(FavsContext)

  if (!result) {
    throw new Error(`useFavs must be used within a FavsProvider`)
  }

  return result
}
