import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const router = useRouter()

  return (
    <header className="fixed left-0 right-0 top-0 bg-white flex items-center justify-end gap-8 py-3 px-6 ">
      {/* Only show the back button in routes different than home */}
      {router.asPath !== '' && (
        <button
          className="absolute px-6 py-1 left-0 top-3 hover:opacity-40"
          onClick={() => router.back()}
          aria-label="Go back"
        >
          Go back
        </button>
      )}

      <Link href="/favorites">
        <a className="hover:opacity-40">Favorites</a>
      </Link>
      <button
        className="border rounded-md px-6 py-1 hover:opacity-40"
        onClick={() => console.log('log out')}
        aria-label="Go back"
      >
        Log out
      </button>
    </header>
  )
}

export default Header
