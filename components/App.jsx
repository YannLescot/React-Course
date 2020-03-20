import React from 'react'
import Posts from './Posts'
import Post from './Post'
import { Router } from '@reach/router'
import CreatePost from './CreatePost'

function App(props){
    return (
        <div className="app_container">
            <div>
            <Router>
            <Posts default />
                <Post path="post/:id" />
            </Router>
            </div>
        </div>
    )
}

export default App;

/*<CreatePost default />
                <Posts path="posts" />*/