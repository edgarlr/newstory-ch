import Layout from 'components/common/Layout'
import { getCharacters } from 'lib/api'
import { getCharacterId } from 'lib/utils/get-character-id'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'

export default function HomePage({
  characters,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(characters)

  return (
    <Layout>
      <section className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-blue-500" />
        <div className="ml-4">
          <p className="font-bold text-gray-800">User Name</p>
          <p className="text-sm text-gray-600">user@mail.com</p>
        </div>
      </section>

      <section>
        {characters.map((character: TCharacter) => (
          <Link
            href={`/characters/${getCharacterId(character.url)}`}
            key={character.url}
          >
            <a>
              <p>{character.name}</p>
            </a>
          </Link>
        ))}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const characters: TCharacter[] = await getCharacters()

  return {
    props: { characters },
    revalidate: 60 * 60 * 24, // Once a day
  }
}
