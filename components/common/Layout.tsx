import React from 'react'
import Header from './Header'

type Props = {
  children: React.ReactNode
  header?: boolean
}

const Layout = ({ children, header = true }: Props) => {
  return (
    <>
      {header && <Header />}

      <main className="min-h-screen px-4 pt-24 pb-20 flex flex-col mx-auto md:w-3/4">
        {children}
      </main>
    </>
  )
}

export default Layout
