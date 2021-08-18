import Head from 'next/head'
import Header from '../components/sections/Header'

const Home = () => (
  <div>
    <Head>
      <title>Home | {process.env.SITE_NAME}</title>
    </Head>
    
    <h1>EDblog</h1>
    <p>Bienvenidos a EDblog by EDteam</p>

    <span>{process.env.ApiBlog}</span>
  </div>
)

export default Home