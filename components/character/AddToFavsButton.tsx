import { useFavs } from 'lib/hooks/use-favs'
import React from 'react'

const addToFavsButton = ({ character }: { character: TCharacter }) => {
  const { addToFavs, removeFromFavs, favs } = useFavs()
  const isOnFavs = favs.some((item: TCharacter) => item.url === character.url)

  if (isOnFavs) {
    return (
      <button
        onClick={() => removeFromFavs(character)}
        className="bg-black text-sm text-white rounded-lg px-6 py-2 border border-gray-600 transition-colors hover:bg-white hover:text-gray-600"
      >
        Remove from favorites
      </button>
    )
  }

  return (
    <button
      onClick={() => addToFavs(character)}
      className="bg-black text-sm text-white rounded-lg px-6 py-2 border border-gray-600 transition-colors hover:bg-white hover:text-gray-600"
    >
      Add To favorites
    </button>
  )
}

export default addToFavsButton
