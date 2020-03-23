import React, {useState, useEffect} from 'react'
import { PageHeader, Card } from 'antd'
import api from '../mock_api'
import db from '../firebase'


const Post = (props) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        let postRef = db
            .collection('posts')
            .doc(props.id)

        postRef
            .get()
                .then(doc => {
                    let {content, title} = doc.data()
                    setTitle(title)
                    setContent(content)
        })

    }, [])

    return(
        <div className="post_container">
              <div className="posts_container">

                    <div  className="page_header_container">
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