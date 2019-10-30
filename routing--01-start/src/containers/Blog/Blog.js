import React, { Component } from 'react';
// import axios from 'axios';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import {Route} from 'react-router-dom';
import './Blog.css';

class Blog extends Component {
    render () {

        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>

                        </ul>
                    </nav>
                </header>
                <Route
                     path="/"
                     exact
                     component={Posts}/>
                <Route
                     path="/new-post"
                     exact
                     component={NewPost}/>
            </div>
        );
    }
}

export default Blog;