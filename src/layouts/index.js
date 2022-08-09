import React from 'react'
import {NavLink} from 'umi'
import './index.css'

export default function layout(props) {
  return (
    <div>
        <header>
            <NavLink exact to="/">首页</NavLink>
            <NavLink exact to="/welcome">欢迎页</NavLink>
            <NavLink exact to="/login">登录页</NavLink>
        </header>
        <main className='main'>
            {props.children}
        </main>
    </div>
  )
}
