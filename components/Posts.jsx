import React, {useState, useEffect} from 'react'
import { PageHeader, Card } from 'antd';
import PostSnippet from './PostSnippet'
import api from '../mock_api'
import _ from 'lodash'
import db from '../firebase'

function Posts(props){

        const [posts, setPosts] = useState([])

        useEffect(() => {
            let postsRef = db.collection('posts')
            postsRef
                .get()
                .then(posts => {
                    posts.forEach(post => {
                        let data = post.data()
                        let {id} = post

                        let payload = {
                            id,
                            ...data
                        }
                        setPosts((posts) => [...posts, payload])
                    })
                })
        }, [])

        return(
        <div className="posts_container">

            <div  className="page_header_container">
            <PageHeader
            style={{
                border: '1px solid rgb(235, 237, 240)'
            }}
            title="Posts"
            />
            </div>

            <div className="articles_container">
            {
                _.map(posts, (article, idx) => {
                    return(
                        <PostSnippet 
                        key={idx}
                        id={article.id}
                        title={article.title} 
                        content={article.content.substring(1, 600)}/>
                    )
                })
            }
            </div>
            </div>

    )
}

export default Posts;