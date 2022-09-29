import type { NextPage } from 'next'
import Layout from '../components/layout'

const Home: NextPage = () => {
  const meta = {
    headerTitle: 'Documentation home',
    pageTitle: 'Gravity - Documentation'
  }

  return (
    <Layout meta={meta}></Layout>
  )
}

export default Home
