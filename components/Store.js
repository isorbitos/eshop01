import { createContext, useReducer } from "react";
import { CART_RETRIEVE_REQUEST, CART_RETRIEVE_SUCCESS } from "../utils/constants";

export const Store = createContext();

function reduser(state, action){
    switch (action.type){
        case CART_RETRIEVE_REQUEST:
        return {
        ...state,
        cart: { loading: true },
      };
    case CART_RETRIEVE_SUCCESS:
        return {
        ...state,
        cart: { loading: false, data: action.payload },
      };
    // case ORDER_SET:
    //     return {
    //     ...state,
    //     order: action.payload,
    //   };
        default:
            return state;
    }
}

const initialState = {
    cart:{loading:true},
    order: null,
}

export function StoreProvider(props){
    const [state, dispatch] = useReducer(reduser, initialState);
    const value = {state, dispatch};
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}