import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import GravityCollector from '@smartesting/gravity-data-collector/dist'

GravityCollector.init({
 authKey: 'dd08d18b-ff35-488c-9d8c-a62f4eb5f714'
})

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
