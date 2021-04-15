import CharactersList from 'components/character/CharactersList'
import Layout from 'components/common/Layout'
import UserCard from 'components/user/UserCard'
import { useFavs } from 'lib/hooks/use-favs'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/dist/client/router'

export default function FavsPage() {
  const { favs } = useFavs()
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
          Your favories characters
        </h2>
        {favs.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-72">
            <h3 className="text-md text-gray-800">
              You don't have any favorites characters yet
            </h3>
            <p className="text-sm text-gray-600">
              Start adding characters in the main page
            </p>
          </div>
        ) : (
          <CharactersList characters={favs} />
        )}
      </section>
    </Layout>
  )
}
