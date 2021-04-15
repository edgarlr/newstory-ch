import CharactersList from 'components/character/CharactersList'
import Layout from 'components/common/Layout'
import UserCard from 'components/user/UserCard'
import { getCharacters } from 'lib/api'
import { InferGetStaticPropsType } from 'next'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/dist/client/router'

export default function HomePage({
  characters,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [session, loading] = useSession()

  const router = useRouter()

  if (!loading && !session) {
    router.push('/login')
  }

  return (
    <Layout>
      <UserCard />

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
