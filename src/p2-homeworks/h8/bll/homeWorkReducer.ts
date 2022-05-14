import {UserType} from '../HW8';

type ActionType = { type: 'sort', payload: 'up' | 'down' } | { type: 'check', payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            return action.payload === 'up'
                ? [...state].sort((a, b) => a.name < b.name ? -1 : 1)
                : [...state].sort((a, b) => a.name > b.name ? -1 : 1)
        }
        case 'check': {
            // need to fix
            return state.filter(user => user.age >= action.payload)
        }
        default: return state
    }
}