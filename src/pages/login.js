import React,{useRef} from 'react'

export default function login({history}) {
    const txtLoginId = useRef();
    const txtLoginPwd = useRef();
    return (
        <div>
            <p>
                账号： <input ref={txtLoginId} type="text"/>
            </p>
            <p>
                密码： <input ref={txtLoginPwd} type="password"/>
            </p>
            <button onClick={() => {
                if(txtLoginPwd.current.value === '123'){
                    localStorage.setItem('user',txtLoginId.current.value)
                    history.push('/welcome')
                }else{
                    alert('密码错误')
                }
            }}>登录</button>
        </div>
    )
}
