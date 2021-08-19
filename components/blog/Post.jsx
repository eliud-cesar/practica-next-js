import React from 'react'
import Link from 'next/link'

const Post = ({ post }) => {
    return (
        <article className="s-radius-l s-pxy-4 s-shadow-bottom course-card background s-shadow-card-micro white-color nowrap s-column s-mb-0">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <span>{`By ${post.id}`}</span>
            <Link href={`/blog/${post.id}`}> Leer mas </Link>
        </article>
    )
}

export default Post
