import AddToFavsButton from 'components/character/AddToFavsButton'
import Layout from 'components/common/Layout'
import { getCharacterById } from 'lib/api'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const character: TCharacter = await getCharacterById(params?.id as string)

  // No props will trigger 404
  if (!character) return { props: {} }

  return {
    props: { character },
    revalidate: 60 * 60 * 24, // Once a day
  }
}

const CharacterPage = ({
  character,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <section>
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl ">{character?.name}</h1>
          <AddToFavsButton character={character!} />
        </div>

        <h2 className="text-xl font-bold text-gray-800">Information</h2>
        <div className="grid md:grid-cols-2">
          <div>
            <p className="text-gray-600">Gender: {character?.gender}</p>
            <p className="text-gray-600">Heigh: {character?.height}</p>
            <p className="text-gray-600">Mass: {character?.mass}</p>
          </div>
          <div>
            <p className="text-gray-600">Eye Color: {character?.eye_color}</p>
            <p className="text-gray-600">Hair Color: {character?.hair_color}</p>
            <p className="text-gray-600">Skin Color: {character?.skin_color}</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CharacterPage
