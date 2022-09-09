// import package
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <aside className='navbar-aside' id='offcanvas_aside'>
                <div className='aside-top'>
                    <Link to='/' className='brand-wrap'>
                        <img src='/images/logo.png' style={{ height: '46' }} className='logo' alt='Ecommerce dashboard template' />
                    </Link>
                    <div>
                        <button className='btn btn-icon btn-aside-minimize'>
                            <i className='text-muted fas fa-stream'></i>
                        </button>
                    </div>
                </div>

                <nav>
                    <ul className='menu-aside'>
                        <li className='menu-item'>
                            <NavLink to='/' activeClassName='active' className='menu-link' exact={true}>
                                <i className='icon fas fa-home'></i>
                                <span className='text'>dashboard</span>
                            </NavLink>
                        </li>

                        <li className='menu-item'>
                            <NavLink to='/products/1' activeClassName='active' className='menu-link'>
                                <i className='icon fas fa-shopping-bag'></i>
                                <span className='text'>Products</span>
                            </NavLink>
                        </li>

                        <li className='menu-item'>
                            <NavLink to='/addproduct' activeClassName='active' className='menu-link'>
                                <i className='icon fas fa-cart-plus'></i>
                                <span className='text'>Add Product</span>
                            </NavLink>
                        </li>

                        <li className='menu-item'>
                            <NavLink to='/category' activeClassName='active' className='menu-link'>
                                <i className='icon fas fa-list'></i>
                                <span className='text'>Categories</span>
                            </NavLink>
                        </li>

                        <li className='menu-item'>
                            <NavLink to='/orders' activeClassName='active' className='menu-link'>
                                <i className='icon fas fa-bags-shopping'></i>
                                <span className='text'>Orders</span>
                            </NavLink>
                        </li>

                        <li className='menu-item'>
                            <NavLink to='/users' activeClassName='active' className='menu-link'>
                                <i className='icon fas fa-user'></i>
                                <span className='text'>Uers</span>
                            </NavLink>
                        </li>

                        <li className='menu-item'>
                            <NavLink to='/sellers' activeClassName='active' className='menu-link disabled'>
                                <i className='icon fas fa-store-alt'></i>
                                <span className='text'>Sellers</span>
                            </NavLink>
                        </li>

                        <li className='menu-item'>
                            <NavLink to='/transaction' activeClassName='active' className='menu-link disabled'>
                                <i className='icon fas fa-usd-circle'></i>
                                <span className='text'>Transactions</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;