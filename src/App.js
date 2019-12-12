import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';


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
      title: this.state.title,
      voteCount: 0
    }


    posts.push(newPost)
    this.setState({
      posts,
      content: '',
      title: '',
      author: 'Ash Rahman',
      
    })
  }

  vote = (e, sentPost, operator) => {
    e.preventDefault();
    const ash = this.state.posts.filter(checkPost => sentPost.title !== checkPost.title);
    switch(operator) {
      case 'plus':
        sentPost.voteCount++
        break;
      case 'minus':
        sentPost.voteCount--
        break;
      default:
        console.log('Something wrong in the vote function')
    }

    ash.push(sentPost);
    ash.sort((a,b) => b.voteCount - a.voteCount)

    // sentPost.voteCount++;
    this.setState({
      posts: ash
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
            <h2 className={post.voteCount >= 0 ? 'pos-number' : 'neg-number'}>{post.voteCount}</h2>
            
            {/* <button onClick={(e) => this.vote(e, post, 'plus')}>Vote Up</button> */}

            <i className="fa fa-angle-double-up" onClick={(e) => this.vote(e, post, 'plus')}></i>

            <i className="fa fa-angle-double-down" onClick={(e) => this.vote(e, post, 'minus')}></i>
            {/* <button onClick={(e) => this.vote(e, post, 'minus')}>Vote Down</button> */}
          </div>
        )}

        Hello world

    </div>
    );
  }
}

export default App;
