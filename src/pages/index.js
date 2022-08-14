import React from 'react'
import Counter from '../components/Counter';

export default function index(props) {
    console.log(props);
  return (
    <div>首页
      <div>
        <Counter />
        <div className='counter_content'>
          <h4>2222</h4>
        </div>
      </div>
    </div>
  )
}
