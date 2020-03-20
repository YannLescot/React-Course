import React, {useState, useEffect} from 'react'
import { PageHeader, Card } from 'antd'
import api from '../mock_api'

const Post = (props) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        let post = api[props.id]
        setTitle(post.title)
        setContent(post.content)
    }, [])

    return(
        <div className="post_container">
              <div className="posts_container">

                    <div  class="page_header_container">
                        <PageHeader
                        style={{
                        border: '1px solid rgb(235, 237, 240)'
                        }}
                        title={title}
                        />
                    </div>

                    <div className="post_content_container">
                        <Card style={{ marginTop: '20px' }}>

                            {
                                content.split('\n').map((paragraph, i) => {
                                    return <p key={i}>{paragraph}</p>
                                })
                            }
                            
                        </Card>
                   </div>

                </div>
        </div>
    )
}

export default Post