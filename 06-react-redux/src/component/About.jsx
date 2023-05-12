import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeCounterAction } from '../store/actionCreators'
export class About extends PureComponent {
  render() {
    const { banners, recommends } = this.props
    return (
      <div>
        <h1>About</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={() => this.props.changeCounter(100)}>+100</button>
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

const mapDispatchToProps = (dispatch) => ({
  // changeCounter: (num) => dispatch(changeCounterAction(num)),
  changeCounter(num) {
    dispatch(changeCounterAction(num))
  },
})

const mapStateToProps = (state) => ({
  counter: state.counter,
  banners: state.banners,
  recommends: state.recommends,
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
