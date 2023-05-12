import Home from './component/Home'
import Profile from './component/Profile'
import About from './component/About'
// import logo from './logo.svg'
import { AppWrapper } from './style'
import Category from './component/Category'
function App() {
  return (
    <div>
      <AppWrapper>
        <div className="left">
          <Home></Home>
        </div>
        <div className="left">
          <Profile></Profile>
        </div>
        <div className="left">
          <About></About>
        </div>
        <div className="left">
          <Category></Category>
        </div>
      </AppWrapper>
    </div>
  )
}

export default App
