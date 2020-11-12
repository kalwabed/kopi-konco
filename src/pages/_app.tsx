import type { AppProps } from 'next/app'

import { AppProvider } from '~components/helpers'
import Layout from '~components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}

export default MyApp
