import React, { memo, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('dylan')
  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <h2>当前名字： {name}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setName('瓦那个开')}>改名</button>
    </div>
  )
})

export default App
