import {all, takeEvery, call, put} from "redux-saga/effects"
import GetProducts from "./GetProducts" 

function* getProductsData(){
    try{
        const data= yield call(GetProducts,"https://dummyjson.com/products")
        yield put({type:"POST_PRODUCTS",payload:data.data.products})
    }catch(e){
        console.error(e.message)
    }
}

function* watcherSaga(){
    yield takeEvery("GET_PRODUCTS",getProductsData)
}

export default function* rootSaga(){
    yield all([watcherSaga()])
}
