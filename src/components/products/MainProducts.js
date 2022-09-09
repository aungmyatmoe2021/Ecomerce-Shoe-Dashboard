// import package
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../LoadingError/Loading';
import Message from '../LoadingError/Message';
import { listProducts } from './../../redux/actions/productActions';
import Product from './Product';

const MainProducts = ({ pageNumber }) => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    // const productDelete = useSelector((state) => state.productDelete);
    // const { error: errorDelete, success: successDelete } = productDelete;
    const { error: errorDelete, success: successDelete } = [];

    useEffect(() => {
        dispatch(listProducts(pageNumber));
    }, [dispatch])

    return (
        <section className='content-main'>
            <div className='content-header'>
                <h2 className='content-title'>Products</h2>
                <div>
                    <Link to='/addproduct' className='btn btn-primary'>Create New</Link>
                </div>
            </div>

            <div className='card mb-4 shadow-sm'>
                <header className='card-header bg-white'>
                    <div className='row gx-3 py-3'>
                        <div className='col-lg-4 col-md-6 me-auto'>
                            <input type='search' placeholder='Search...' className='form-control p-2' />
                        </div>

                        <div className='col-lg-2 col-6 col-md-3'>
                            <select className='form-select'>
                                <option>All Category</option>
                                <option>Electronics</option>
                                <option>Clothings</option>
                                <option>Something else</option>
                            </select>
                        </div>

                        <div className='col-lg-2 col-6 col-md-3'>
                            <select className='form-select'>
                                <option>Latest added</option>
                                <option>Cheap first</option>
                                <option>Most viewed</option>
                            </select>
                        </div>
                    </div>
                </header>

                {/* body */}
                <div className='card-body'>
                    {errorDelete && (
                        <Message variant="alert-danger">{errorDelete}</Message>
                    )}
                    {loading ? (
                        <Loading />
                    ) : error ? (
                        <Message variant="alert-danger">{error}</Message>
                    ) : (
                        <div className="row">
                            {/* Products */}
                            {products.products && products.products.map((product) => (
                                <Product product={product} key={product._id} />
                            ))}
                        </div>
                    )}

                    <nav className='float-end mt-4' aria-label='Page navigation'>
                        <ul className='pagination'>
                            <li className='page-item disabled'>
                                <Link to='#' className='page-link'>
                                    Previous
                                </Link>
                            </li>
                            <li className='page-item active'>
                                <Link to='1' className='page-link'>
                                    1
                                </Link>
                            </li>
                            <li className='page-item'>
                                <Link to='2' className='page-link'>
                                    2
                                </Link>
                            </li>
                            <li className='page-item'>
                                <Link to='#' className='page-link'>
                                    Next
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default MainProducts;