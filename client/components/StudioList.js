import React, {Component} from 'react'
import {connect} from 'react-redux'
import SingleProductCard from './Cards/SingleProductCard'
import {fetchStudios} from '../store'

class ProductList extends Component {
  async componentDidMount() {
    await this.props.fetchStudios()
  }

  render() {
    const studios = this.props.studios
    return studios.map(studio => (
      <SingleProductCard
        key={studio.id}
        studio={studio}
      />
    ))
  }
}

const mapState = state => ({
  studios: state.studios,
  user: state.user.currentUser
})
const mapDispatch = dispatch => ({
  fetchStudios: () => dispatch(fetchStudios),
})
export default connect(mapState, mapDispatch)(ProductList)
