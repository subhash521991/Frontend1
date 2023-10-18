import React, {useState} from 'react'

const Home = () => {
const [count, setCount] = useState(0);

const increment = ()=>{

    setCount(count + 1);
}
const decrement = ()=>{

    setCount(count - 1);
}

  return (
    <div>
      <p>Hpme Page Component</p>
      <p>Count : {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Home
