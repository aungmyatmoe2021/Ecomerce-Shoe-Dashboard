import axios from 'axios';
import {
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL
} from './../constants/orderConstants';
import { logout } from './userActions';

export const ordersList = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_LIST_REQUEST });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get(`https://ecomerce-shoe-backend.herokuapp.com/api/orders/all`, config);

        if (data.msg.order.length > 0) {
            dispatch({ type: ORDER_LIST_SUCCESS, payload: data.msg })
        }
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: ORDER_LIST_FAIL,
            payload: message
        })
    }
}