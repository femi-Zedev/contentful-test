import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './templates/Layout'
import 'dayjs/locale/fr';
import dayjs from 'dayjs';

export default function App({ Component, pageProps }: AppProps) {
  dayjs.locale('fr')
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
