import React from 'react'
import xhr from '../utils/xhr'

class UsersPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: null,
      totalPages: null,
      users: []
    }
    this.getUsers = this.getUsers.bind(this)
  }

  componentWillMount() {
    this.getUsers(1)
  }

  getUsers(page) {
    xhr.get(`/users?page=${page}`).then(response => {
      this.setState({
        users: response.data,
        totalPages: response.total_pages,
        page: response.page
      })
    })
  }

  render() {
    const { users, totalPages } = this.state
    if (!Array.isArray(users)) return <div>Loading...</div>

    // A hacky way to make an array representing the pages we need
    const pages = [...Array(totalPages).keys()]

    return (
      <div>
        <h1>Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>{`${user.first_name} ${user.last_name}`}</li>
          ))}
        </ul>
        <div>
          {pages.map((x, i) => {
            console.log(i)
            console.log('herere')
            return <button key={i} onClick={() => this.getUsers(i + 1)}>{i + 1}</button>
          })}
        </div>
      </div>
    )
  }

}

export default UsersPage
