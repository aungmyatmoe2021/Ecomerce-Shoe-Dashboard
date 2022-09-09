// Import Package
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Reference Link
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import PrivateRouter from './PrivateRouter';
import './responsive.css';
import AddProductScreen from './screens/AddProductScreen';
import CategoryScreen from './screens/CategoryScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import OrderDetailScreen from './screens/OrderDetailScreen';
import OrderScreen from './screens/OrderScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductScreen from './screens/ProductScreen';
import { ordersList } from "./redux/actions/orderActions";
import { listProducts } from './redux/actions/productActions';
import UserSceen from './screens/UserSceen';

function App() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(ordersList());
      dispatch(listProducts());
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter path='/' component={HomeScreen} exact />
          <PrivateRouter path='/products/:pageNumber' component={ProductScreen} />
          <PrivateRouter path='/addproduct' component={AddProductScreen} />
          <PrivateRouter path='/product/:id/edit' component={ProductEditScreen} />
          <PrivateRouter path='/category' component={CategoryScreen} />
          <PrivateRouter path='/orders' component={OrderScreen} />
          <PrivateRouter path='/order/:id' component={OrderDetailScreen} />
          <PrivateRouter path='/users' component={UserSceen} />
          <Route path="/login" component={LoginScreen} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
