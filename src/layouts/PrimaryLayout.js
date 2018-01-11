import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrimaryHeader from '../layout-helpers/PrimaryHeader'
import SideMenu from '../layout-helpers/SideMenu'
import GroceriesPage from '../groceries/GroceriesPage'
import UsersPage from '../users/UsersPage'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <PrimaryHeader />
    <div className="primary-content">
      <SideMenu />
      <Switch>
        <Route path="/" exact component={GroceriesPage} />
        <Route path="/users" component={UsersPage} />
      </Switch>
    </div>
  </div>
)

export default PrimaryLayout
