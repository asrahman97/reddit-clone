import React from 'react';
import Comments from './comments';

const PostList = (props) => {
  return (
    <div>
          {props.posts.map((post, key) =>
          <div key={key} className='post-wrapper'>
            <h4>{post.title}</h4>
            <h3>{post.content}</h3>
            <h3>{post.author}</h3>
            <h2 className={post.voteCount >= 0 ? 'pos-number' : 'neg-number'}>{post.voteCount}</h2>
            
            {/* <button onClick={(e) => this.vote(e, post, 'plus')}>Vote Up</button> */}

            <i className="fa fa-angle-double-up" onClick={(e) => props.vote(e, post, 'plus')}></i>

            <i className="fa fa-angle-double-down" onClick={(e) => props.vote(e, post, 'minus')}></i>
              {/* <button onClick={(e) => this.vote(e, post, 'minus')}>Vote Down</button> */}
              
              {post.comments.length > 0 && <Comments comments={post.comments} />}
          </div>
        )}
    </div>
  )
}









export default PostList;