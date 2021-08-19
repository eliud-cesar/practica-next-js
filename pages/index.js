import Head from 'next/head'
import fetch from 'node-fetch'
import Post from '../components/blog/Post'

const Home = ({ posts }) => (
  <div>
    <Head>
      <title>Home | {process.env.SITE_NAME}</title>
    </Head>
    
    <h1>EDblog</h1>
    <p>Bienvenidos a EDblog by EDteam</p>

    <div className="ed-grid m-grid-3 row-gap">
      {
        posts.map(p => <Post post={p} /> )
      }
    </div>
  </div>
)

export async function getStaticProps() {
  const resp = await fetch(`${process.env.ApiBlog}/posts`)
  const posts = await resp.json()

  return {
    props: {
      posts
    }
  }
}

export default Home