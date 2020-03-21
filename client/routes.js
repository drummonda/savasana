import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import ProductList from './components/Cards/ProductList'
import PropTypes from 'prop-types'
import {me} from './store'
import ViewProfile from './components/ViewProfile'
import Main from './components/Main'
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
      {!isLoggedIn ?
        <Switch>
          {/* Routes placed here are available to all visitors */}
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={ProductList} />
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/signup" component={Signup} /> */}
        </Switch>
        :
        <Switch>
          {/* Routes placed here are only available after logging in */}
          <Route exact path="/" component={ProductList} />
          <Route exact path="/home" component={ProductList} />
          <Route path="/users/:userId" component={ViewProfile} />
        </Switch>
      }
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.currentUser.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
