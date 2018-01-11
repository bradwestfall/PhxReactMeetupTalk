import React from 'react'
import { Link } from 'react-router-dom'

const PrimaryHeader = () => (
  <header className="primary-header">
    <Link to="/">Groceries</Link> | <Link to="/users">Users</Link>
    <hr />
  </header>
)

export default PrimaryHeader
