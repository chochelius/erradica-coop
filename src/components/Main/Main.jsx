import React, { Suspense } from 'react'
import PostCard from '../PostCard'
import getResultList from '../../api/Api'


function Main() {
    let posts = getResultList
    console.log(posts.length)

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>

                <PostCard title="title" content="content" imgurl="https://picsum.photos/200" user="user" likes="likes" created="today" updated="today" />

            </Suspense>
        </>

    )
}

export default Main