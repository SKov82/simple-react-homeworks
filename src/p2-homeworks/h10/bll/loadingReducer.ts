type InitStateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingACType): InitStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_IS_LOADING':
            return {...state, isLoading: !state.isLoading}
        default:
            return state
    }
}

export type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = () => ({ type: 'CHANGE_IS_LOADING' }) // fix any