import CharactersList from 'components/character/CharactersList'
import Layout from 'components/common/Layout'
import { useFavs } from 'lib/hooks/use-favs'

export default function FavsPage() {
  const { favs } = useFavs()
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
