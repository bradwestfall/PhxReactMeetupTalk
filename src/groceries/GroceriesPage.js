import React from 'react'
import _ from 'lodash'

class GroceryItem extends React.Component {
  render() {
    const item = this.props.item

    return (
      <div>
        {item.name}, Count: {item.count}
        <button onClick={() => this.props.addQuantity(item.name)}>Add</button>
        <hr />
      </div>
    )
  }
}

class GroceriesPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groceries: [
        {name: 'pears', count: 0}
      ]
    }
    this.addNewProduct = this.addNewProduct.bind(this)
    this.addQuantity = this.addQuantity.bind(this)
  }

  addNewProduct(name) {
    this.setState({
      groceries: this.state.groceries.concat([{ name, count: 0 }])
    })
  }

  addQuantity(name) {
    const groceries = _.cloneDeep(this.state.groceries)
    const index = groceries.findIndex(item => item.name === name)
    groceries[index].count++
    this.setState({ groceries })
  }

  render() {
    return (
      <main>
        {this.state.groceries.map((item, i) => {
          return <GroceryItem key={item.name} item={item} addQuantity={this.addQuantity} />
        })}

        <button onClick={() => this.addNewProduct('apples')}>Get Apples</button>
        <button onClick={() => this.addNewProduct('oranges')}>Get Oranges</button>
        <button onClick={() => this.addNewProduct('bananas')}>Get Bananas</button>
        <hr />
        <button onClick={() => { this.setState({ groceries: [] }) }}>Clear List</button>
      </main>
    )
  }
}

export default GroceriesPage