import _ from 'lodash'
import jsonplaceholder from '../api/jsonplaceholder'

const action_creator = (type, api_url) => async (dispatch) => {
  const response = await jsonplaceholder.get(api_url)
  dispatch({ type, payload: response.data })
}

export const fetchUser = (id) => action_creator('FETCH_USER', `/users/${id}`)

export const fetchPosts = () => action_creator('FETCH_POSTS', '/posts')

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  const posts = await dispatch(fetchPosts())

  _.uniq(_.map(getState().posts, 'userId')).forEach((id) => dispatch(fetchUser(id)))
}
