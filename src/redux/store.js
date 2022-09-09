import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userLoginReducer, userListReducer } from "./reducers/userReducers";
import { ordersListReducer } from "./reducers/orderReducers";
import { productDeleteReducer, productEditReducer, productListReducer, productUpdateReducer, productCreateReducer } from "./reducers/productReducers";

const reducer = combineReducers({
    userLogin: userLoginReducer,
    ordersList: ordersListReducer,
    productList: productListReducer,
    productEdit: productEditReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    userList: userListReducer
});

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;