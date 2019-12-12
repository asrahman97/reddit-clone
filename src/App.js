import React, { Component } from 'react';
import './App.css';

import CreatePost from './components/createPost'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        title: '',
        content: '',
        author: 'Ash Rahman',
        voteCount: 0,
        posts: [{
          title: 'This is my post',
          content: 'My post is pretty good',
          author: 'Ash Rahman',
          voteCount: 0
          }]
      }





  }


  onContentChange = (e) => {
    //completely optional variable but makes it easier
    const content = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: content
    })
  }

  postSubmit = (e) => {
    e.preventDefault();
    const posts = this.state.posts;
    const newPost = {
      author: this.state.author,
      content: this.state.content,
      title: this.state.title
    }


    posts.push(newPost)
    this.setState({
      posts,
      content: '',
      title: '',
      author: 'Ash Rahman'
    })
  }

  upVote = (e, sentPost) => {
    e.preventDefault();
    const ash = this.state.posts.filter(checkPost => sentPost.title !== checkPost.title);
    sentPost.voteCount++;
    this.setState({
      posts: [...ash, sentPost]
    })
  }


  render() {
    console.log(this.state.posts)
    return (
      <div className="App">
        <h1>Reddit</h1>

        <CreatePost
          postSubmit={this.postSubmit}
          onContentChange={this.onContentChange}
          title={this.state.title}
          content={this.state.content}
        />

        {this.state.posts.map((post, key) =>
          <div key={key} className='post-wrapper'>
            <h4>{post.title}</h4>
            <h3>{post.content}</h3>
            <h3>{post.author}</h3>
            <button onClick={(e) => this.upVote(e, post)}>Vote Up</button>
            <button onClick={(e) => this.downVote(e, post)}>Vote Down</button>
          </div>
        )}

        Hello world

    </div>
    );
  }
}

export default App;
