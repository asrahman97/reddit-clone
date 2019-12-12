import React, { Component } from 'react';
import CreatePost from './createPost'
import PostList from './postList'

class Post extends Component {
  constructor() {
    super();

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
    return ( 
      <div>
      <CreatePost
          postSubmit={this.postSubmit}
          onContentChange={this.onContentChange}
          title={this.state.title}
          content={this.state.content}
        />

        <PostList
          posts={this.state.posts}
          vote={this.vote}
        />

</div>

    )
  }

}




export default Post;