import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Comments = ({ id }) => {

    const [ comments, setComments ] = useState()
    const [ user, setUser ] = useState(false)

    useEffect(() => {
        if(user) {
            axios.get(`${process.env.ApiBlog}/posts/${id}/comments`)
                .then(resp => {
                    setComments(resp.data)
                })
                .catch(err => console.log(err))
        }
    }, [user])

    if (!comments) return (
        <div>
            <a onClick={() => setUser(true)} >Cargando comentarios</a>
        </div>
    )

    return(
        <div>
            <h2>Comentarios</h2>
            {
                comments.map(c => (
                    <div key={c.id}>
                        <h3>{c.email}</h3>
                        <p>{c.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments
