import React from 'react'
import { PageHeader, Card } from 'antd';
import PostSnippet from './PostSnippet'
import api from '../mock_api'
import _ from 'lodash'


function Posts(props){
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
                _.map(api, (article, idx) => {
                    return(
                        <PostSnippet 
                        key={idx}
                        id={idx}
                        title={article.title} 
                        content={article.content}/>
                    )
                })
            }
            </div>
            </div>

    )
}

export default Posts;