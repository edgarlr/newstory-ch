import { FavsContext } from 'lib/hooks/use-favs'
import { useLocalStorage } from 'lib/hooks/use-local-storage'
import { useCallback } from 'react'
import { useSession } from 'next-auth/client'

const FavsProvider = ({ children }: { children: React.ReactNode }) => {
  const [session] = useSession()

  const [favs, setFavs] = useLocalStorage<TCharacter[]>(
    `favs-${session?.user.email}`,
    []
  )

  const addToFavs = useCallback(
    (character: TCharacter) => {
      setFavs([...favs, character])
    },
    [favs, setFavs]
  )

  const removeFromFavs = useCallback(
    (character: TCharacter) => {
      setFavs(favs.filter((item: TCharacter) => item.url !== character.url))
    },
    [favs, setFavs]
  )

  return (
    <FavsContext.Provider value={{ addToFavs, removeFromFavs, favs }}>
      {children}
    </FavsContext.Provider>
  )
}

export default FavsProvider
