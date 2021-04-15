import { FavsContext } from 'lib/hooks/use-favs'
import { useCallback, useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'

const FavsProvider = ({ children }: { children: React.ReactNode }) => {
  const [session] = useSession()
  const [favs, setFavs] = useState([])

  const readValue = () => {
    if (typeof window === undefined) []
    try {
      const item = window.localStorage.getItem(`favs-${session?.user.email}`)
      return item ? JSON.parse(item) : []
    } catch (e) {
      return []
    }
  }

  useEffect(() => {
    setFavs(readValue())
  }, [])

  const setLocalStorage = (value: any) => {
    if (typeof window === undefined) return

    try {
      window.localStorage.setItem(
        `favs-${session?.user.email}`,
        JSON.stringify(value)
      )
      setFavs(value)
      window.dispatchEvent(new Event('local-storage'))
    } catch (e) {
      return
    }
  }

  const addToFavs = useCallback(
    (character: TCharacter) => {
      setLocalStorage([...favs, character])
    },
    [favs, setFavs]
  )

  const removeFromFavs = useCallback(
    (character: TCharacter) => {
      setLocalStorage(
        favs.filter((item: TCharacter) => item.url !== character.url)
      )
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
