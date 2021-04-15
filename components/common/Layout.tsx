import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>

      <main className="min-h-screen px-4 pt-24 pb-20 flex flex-col mx-auto md:w-3/4">
        {children}
      </main>
    </>
  )
}

export default Layout
