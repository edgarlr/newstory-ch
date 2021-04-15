import { getCharacterId } from 'lib/utils/get-character-id'
import React from 'react'
import Link from 'next/link'

const CharactersList = ({ characters }: { characters: TCharacter[] }) => {
  return (
    <ul>
      {characters.map((character: TCharacter) => (
        <li
          key={character.url}
          className="border-b px-2 py-3 transition-colors hover:bg-gray-50"
        >
          <Link href={`/characters/${getCharacterId(character.url)}`}>
            <a>
              <p>{character.name}</p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default CharactersList
