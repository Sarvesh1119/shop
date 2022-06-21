import {createStore, applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./saga" 

const sagaMiddleware= createSagaMiddleware()

const initialState= {
    products:{}
}
const reducer= (state=initialState, action) => {
    switch(action.type){
        case "POST_PRODUCTS":
            return {
                ...state,
                products:[...action.payload]
            }
        default :
            return state
    }
}
const store=createStore(reducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store