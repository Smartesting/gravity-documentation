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

      <h2>Browse the documentation</h2>
      <p>
        Learn how to configure and use Gravity
      </p>

      <ul>
        <li>
          Getting started
          How to install and configure Gravity on your production and test environment and get your first data
        </li>

        <li>
          Browse sessions
          How to explore your data and start figuring out how your customers actually use your application
        </li>

        <li>

        </li>
      </ul>

    </Layout>
  )
}

export default Home
