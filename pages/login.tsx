import Layout from 'components/common/Layout'
import React from 'react'
import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/dist/client/router'

function LoginPage() {
  const [session, loading] = useSession()
  const router = useRouter()
  if (session) {
    router.push('/')
  }
  return (
    <Layout header={false}>
      <section className="w-96 h-72 rounded-2xl mx-auto mt-16 border py-12 px-8 flex flex-col">
        <h2 className="mx-auto mt-4 font-bold text-gray-600">Login</h2>
        <p className="text-sm text-center text-gray-800">
          Login using your google account
        </p>
        <button
          onClick={() =>
            signIn('google', { callbackUrl: 'https://newstory-ch.vercel.app/' })
          }
          className="w-full mt-10 py-3 text-gray-800 border rounded-sm transition-colors hover:bg-blue-500 hover:text-white"
        >
          {loading ? 'Loading...' : 'Login with Google'}
        </button>
      </section>
    </Layout>
  )
}

export default LoginPage
