const reducer = (state = {}, action) => {
    switch (action.type) {
        case "USERS": {
            return { ...state, user: action.user }
        }
        case "CURRENT_USER": {
            return { ...state, curr: action.user }
        }
        case "INVITATION": {
            return { ...state, attend: action.attend, guestNum: Number(action.guestNum) }
        }
        case "REQUIREMENT": {
            return { ...state, req: action.req }
        }
        default: {
            return state;
        }
    }
}
export default reducer