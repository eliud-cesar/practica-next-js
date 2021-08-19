import Head from 'next/head'
import fetch from 'node-fetch'

const PostBLog = ({ post }) => (
    <div>
        <Head>
            <title>{post.title} | EDblog</title>
        </Head>
    <main>
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <li>ID: {post.id}</li>
        </div>
    </main>
</div>
)

PostBLog.getInitialProps = async function(context) {
    const { id } = context.query
    const resp = await fetch(`${process.env.ApiBlog}/posts/${id}`)
    const post = await resp.json()

    return {
        post
    }
}

export default PostBLog