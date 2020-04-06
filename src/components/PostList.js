import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Author from './Author'
import { fetchPostsAndUsers } from '../actions/actions'

const PostList = ({ posts, fetchPostsAndUsers }) => {
  useEffect(() => {
    fetchPostsAndUsers()
  }, [])
  if (!posts) {
    return null
  }
  const renderPosts = posts.map((post) => (
    <div className='item' key={post.id}>
      <h4> {post.title}</h4>
      <p>{post.body}</p>
      <Author id={post.userId} />
    </div>
  ))
  return <div className='ui divided relaxed list'>{renderPosts}</div>
}

const mapStateToProps = (state) => ({ posts: state.posts })

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList)
