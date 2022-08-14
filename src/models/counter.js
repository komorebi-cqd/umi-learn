export default {
    state: 0,
    reducers: {
        onDecrease(state){
            return state - 1
        },
        onIncrease(state){
            return state + 1
        }
    }
}