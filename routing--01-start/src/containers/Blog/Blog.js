import React, { Component } from 'react';
// import axios from 'axios';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';

// react-router-dom components used:
// need route and links to maintain state while switching 
// between pages with reloading. 

const AsyncNewPost = asyncComponent(() => {
    //dynamic importing
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true,
    }

    render () {

        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'}}>New Post</NavLink></li>

                        </ul>
                    </nav>
                </header>
                <Switch>             
                    {/* <Route path="/" component={Posts}/> */}
                    { this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}
                    <Route path="/posts" component={Posts}></Route>
                    {/* <Route render={() => <h1>Not Found</h1>}></Route> */}
                    <Redirect from='/' to="/posts"></Redirect>
                </Switch>
            </div>
        );
    }
}

export default Blog;