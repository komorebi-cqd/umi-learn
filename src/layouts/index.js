import React from 'react'
import {Link} from 'umi'

export default function Layout(props) {
  return (
    <div>
      <header>
        <Link to={'/sub'}>sub页面</Link>
        <Link to={'/sub/a'}>sub/a页面</Link>
      </header>
      <div>
        {props.children}
      </div>
    </div>
  )
}
