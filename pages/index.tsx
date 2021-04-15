import CharactersList from 'components/character/CharactersList'
import Layout from 'components/common/Layout'
import { getCharacters } from 'lib/api'
import { InferGetStaticPropsType } from 'next'

export default function HomePage({
  characters,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <section className="flex items-center mb-10">
        <div className="w-12 h-12 rounded-full bg-blue-500" />
        <div className="ml-4">
          <p className="font-bold text-gray-800">User Name</p>
          <p className="text-sm text-gray-600">user@mail.com</p>
        </div>
      </section>

      <section>
        <h2 className="text-gray-800 text-xl font-bold mb-2">
          Star Wars Characters
        </h2>
        <CharactersList characters={characters} />
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
