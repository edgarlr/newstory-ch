import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const router = useRouter()
  return (
    <header className="flex justify-end gap-8 relative py-3 px-6 ">
      <button
        className="absolute left-6 top-3 hover:opacity-40"
        onClick={() => router.back()}
        aria-label="Go back"
      >
        Go back
      </button>
      <Link href="/favorites">
        <a className="hover:opacity-40">Favorites</a>
      </Link>
      <button
        className="hover:opacity-40"
        onClick={() => console.log('log out')}
        aria-label="Go back"
      >
        Log out
      </button>
    </header>
  )
}

export default Header
