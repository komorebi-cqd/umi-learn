import React from 'react'
import {withRouter} from 'umi'

function A(props) {
    console.log(props);
  return (
    <div>A组件</div>
  )
}


export default withRouter(A);