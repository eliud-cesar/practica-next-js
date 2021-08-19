import fetch from 'node-fetch'
import Post from '../components/blog/Post'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

const Home = ({ posts }) => (
  <div>

  <NextSeo
      title="Bienvenido al Blog de Eliud Cesar"
      description="El blog de un estudiante y programador"
      openGraph={{
        url: "https://blogeliud.vercel.com",
        title: "Bienvenido al Blog de Eliud Cesar",
        images: [
          {
            url: "https://edteam-media.s3.amazonaws.com/courses/medium/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
            width: 1280,
            height: 720,
            alt: "Foto de curso de React desde cero (2019)"
          }
        ],
        site_name: "Blog de Eliud Cesar"
      }}
      twitter= {{
        handle: "@eliud-cesar",
        site: "@eliud-cesar",
        cardType: "summary_large_image"
      }}
    />
    
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