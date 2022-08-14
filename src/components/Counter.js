import React from 'react'
import { connect } from 'dva'
import style from './counter.less';

function Counter({ number, onDecrease, onIncrease }) {
    return (
        <div className={style.counter_content}>
            <h4>{number}</h4>
            <button onClick={onDecrease}>-</button>
            <button onClick={onIncrease}>+</button>
        </div>
    )
}

const mapStateToProps = state => ({
    number: state.counter
})

const mapDispatchToProps = dispatch => ({
    onDecrease() {
        dispatch({ type: 'counter/onDecrease' })
    },
    onIncrease() {
        dispatch({ type: 'counter/onIncrease' })
    },
})


export default connect(mapStateToProps, mapDispatchToProps)(Counter);