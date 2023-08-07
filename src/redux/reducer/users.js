import { USER_TYPE } from "../Constant";
const initialState = [];
export const usertype = (state = initialState, action) => {
    switch (action.type) {
        case USER_TYPE:
            return [
                ...state,
                action.data
            ]

        default:
            return state
    }

}