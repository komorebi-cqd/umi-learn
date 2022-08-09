import React from 'react'

export default function welcome({history}) {
    const loginName = localStorage.getItem('user');
    return (
        <div className='container'>
            welcome,{loginName}
            <div>
                <button onClick={() => {
                    localStorage.removeItem('user');
                    history.push('/login')
                }}>注销</button>
            </div>
        </div>
    )
}
