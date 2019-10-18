import React, { Component } from 'react';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Tate'
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
        };
        axios.post('https://jsonplaceholder.typicode.com/posts/', data)
            .then(response => {
                //in this example, we are just logging the successful
                // post response. Since it is to a dummy server, nothing is being
                // saved. Will need serverside logic to deal with the
                // post request
                console.log(response);
            });
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Tate">Tate</option>
                    <option value="Gandalf">Gandalf</option>
                </select>
                <button onClick={() => this.postDataHandler()}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;