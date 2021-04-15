import FavsProvider from 'components/FavsProvider'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FavsProvider>
      <Component {...pageProps} />
    </FavsProvider>
  )
}

export default MyApp
