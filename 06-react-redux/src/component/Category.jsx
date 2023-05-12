import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchHomeMultidataAction } from '../store/actionCreators'

export class Category extends PureComponent {
  // componentDidMount() {
  //   axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  //     const banners = res.data.data.banner.list
  //     const recommends = res.data.data.recommend.list
  //     this.props.getBanners(banners)
  //     this.props.getRecommends(recommends)
  //     this.props.fetchData()
  //   })
  // }
  componentDidMount() {
    this.props.fetchData()
  }
  render() {
    return <div>Category</div>
  }
}

const mapDispatchToProps = (dispatch) => ({
  // getBanners(data) {
  //   dispatch(getBannersAction(data))
  // },
  // getRecommends(data) {
  //   dispatch(getRecommendsAction(data))
  // },
  fetchData(data) {
    dispatch(fetchHomeMultidataAction(data))
  },
})
const mapStateToProps = (state) => ({
  counter: state.counter,
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)
