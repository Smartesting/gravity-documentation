import type { NextPage } from 'next'
import Layout from '../components/layout'

const Home: NextPage = () => {
  const meta = {
    headerTitle: 'Documentation home',
    pageTitle: 'Gravity - Documentation'
  }

  return (
    <Layout meta={meta}>
      <h2>What is Gravity?</h2>
      <p>
        Gravity helps Agile & DevOps teams to deliver high-quality software faster, by enabling them select and design end-to-end tests accordingly to HOW their users truly interact with their software.

        We call it a Usage-Driven Testing platform.
      </p>

      <video src="https://www.gravity-testing.com/wp-content/uploads/2022/09/Gravity-Presentation-short-format-.mp4"  controls={false} controlsList="nodownload"></video>

    </Layout>
  )
}

export default Home
