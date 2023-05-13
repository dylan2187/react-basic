import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNumber, multipleNumber } from '../store/modules/counter'

export class Home extends Component {
  render() {
    const { counter } = this.props
    return (
      <div>
        <h1>Home</h1>
        <h2>counter: {counter}</h2>
        <button onClick={() => this.props.multipleNumber(5)}>x5</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
})

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num))
  },
  multipleNumber(num) {
    dispatch(multipleNumber(num))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
