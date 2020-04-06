import React, { useEffect, Component } from 'react'
import { fetchUser } from '../actions/actions'
import { connect } from 'react-redux'

const Author = ({ author }) => {
  if (!author) {
    return null
  }
  return <div>{author.name}</div>
}

const mapStateToProps = (state, ownProps) => {
  return { author: state.users.find((user) => user.id === ownProps.id) }
}

export default connect(mapStateToProps, { fetchUser: fetchUser })(Author)
