import FavsProvider from 'components/FavsProvider'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { Provider as AuthProvider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider session={pageProps.session}>
      <FavsProvider>
        <Component {...pageProps} />
      </FavsProvider>
    </AuthProvider>
  )
}

export default MyApp
