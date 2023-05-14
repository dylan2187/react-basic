import React, { memo, useState, useEffect } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    //组件渲染时自动执行这个函数，处理副作用
    document.title = `counter： ${counter}`
    console.log('监听了redux')
    return () => {
      console.log('取消监听了')
    }
  })
  return (
    <div>
      <h1>App</h1>
      <h2>当前计数： {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

export default App
