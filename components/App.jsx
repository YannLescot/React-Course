import React from 'react'
import Posts from './Posts'
import Post from './Post'
import CreatePost from './CreatePost'
import { Router } from '@reach/router'
import { Menu, Icon, MenuItem } from 'antd';
const { SubMenu } = Menu

function App(props){

    return (
        <div className="app_container">

                {/* <div className="app_main_navigation">
               <Menu mode="horizontal">
               <MenuItem key="mail">
                   <Icon type="form"/>
                   Posts
               </MenuItem>

               <MenuItem key="app">
                   <Icon type="highlight"/>
                   Create Post
               </MenuItem>
               </Menu>
                </div> */}

            <Router>
                <Posts default />
                <Post path="post/:id" />
                <CreatePost path="create_post" />
            </Router>
        </div>
    );
}

export default App;