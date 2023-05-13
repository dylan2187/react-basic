import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNumber, multipleNumber } from '../store/modules/counter'

export class Profile extends Component {
  addNumber(num) {
    this.props.addNumber(num)
  }
  render() {
    const { counter, banners, recommends } = this.props
    return (
      <div>
        <h1>Profile</h1>
        <h2>counter: {counter}</h2>
        <button onClick={() => this.props.addNumber(2)}>+2</button>
        <button onClick={() => this.props.multipleNumber(2)}>x2</button>
        <button onClick={() => this.props.addNumber(-4)}>-4</button>
        <div>
          <h2>轮播图</h2>
          <ul>
            {banners.map((item, index) => {
              return <li key={item.title}>{item.title}</li>
            })}
          </ul>
          <h2>推荐商品</h2>
          <ul>
            {recommends.map((item, index) => {
              return <li key={item.title}>{item.title}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends: state.home.recommends,
})

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num))
  },
  multipleNumber(num) {
    dispatch(multipleNumber(num))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
