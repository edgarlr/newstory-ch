import Layout from 'components/common/Layout'
import React from 'react'

function LoginPage() {
  return (
    <Layout>
      <section className="w-96 h-72 rounded-2xl mx-auto border py-12 px-8 flex flex-col">
        <h2 className="mx-auto mt-4 font-bold text-gray-600">Login</h2>
        <p className="text-sm text-center text-gray-800">
          Login using your google account
        </p>
        <button className="w-full mt-10 py-3 text-gray-800 border rounded-sm transition-colors hover:bg-blue-500 hover:text-white">
          Login with Google
        </button>
      </section>
    </Layout>
  )
}

export default LoginPage
