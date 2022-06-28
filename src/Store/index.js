import {createStore, applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./saga" 

const sagaMiddleware= createSagaMiddleware()

const initialState= {
    products:{},
    cart:[],
    buy:[]
}
const reducer= (state=initialState, action) => {
    switch(action.type){
        case "POST_PRODUCTS":
            return {
                ...state,
                products:[...action.payload]
            }
        case "ADD_TO_CART":
            return {
                ...state,
                cart:[...state.cart,action.payload]
            }
        case "ADD_QUANTITY":
            return {
                ...state,
                cart:state.cart.map(product => {
                if (product.id == action.payload) {
                    return { ...product, quantity: product.quantity + 1 };
                }
                return product;
            })};
        case "SUB_QUANTITY":
            return {
                ...state,
                cart:state.cart.map(product => {
                if (product.id == action.payload) {
                    if(product.quantity>0){
                        return { ...product, quantity: product.quantity - 1 };
                    }
                }
                return product;
            })};
        case "REMOVE_ITEM":
            return {
                ...state,
                cart: state.cart.filter(product=> product.id!==action.payload )
            }
        case "BUY":
            return {
                ...state,
                buy:[action.payload]
            }
        default :
            return state
    }
}
const store=createStore(reducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store