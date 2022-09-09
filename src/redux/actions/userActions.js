import {
    USER_LIST_FAIL,
    USER_LIST_REQUEST,
    USER_LIST_RESET,
    USER_LIST_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
} from "./../constants/userConstants";
import axios from "axios";
import { toast } from "react-toastify";

// LOGIN
export const login = (email, password) => async (dispatch) => {
    const ToastObjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    };
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            `https://ecomerce-shoe-backend.herokuapp.com/api/user/login`,
            { email, password },
            config
        );

        if (data.msg.isAdmin === false) {
            toast.error("You are not Admin", ToastObjects);
            dispatch({
                type: USER_LOGIN_FAIL,
            });
        } else {

            localStorage.setItem("userInfo", JSON.stringify(data.msg));
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data.msg });
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
            type: USER_LOGIN_FAIL,
            payload: message,
        });
    }
};

// Logout
export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_LIST_RESET });
}

// User List
export const listUser = () => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_LIST_REQUEST });

        const {
            userLogin: { userInfo }
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get('https://ecomerce-shoe-backend.herokuapp.com/api/user', config);

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data.msg.users
        });
    } catch (error) {
        const message = error.response && error.response.data.msg ? error.response.data.msg : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: USER_LIST_FAIL,
            payload: message
        })
    }
}