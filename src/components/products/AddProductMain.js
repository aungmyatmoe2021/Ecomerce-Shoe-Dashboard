import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createProduct } from '../../redux/actions/productActions';
import { PRODUCT_CREATE_RESET } from '../../redux/constants/productConstants';
import Loading from '../LoadingError/Loading';
import Message from '../LoadingError/Message';
import Toast from './../LoadingError/Toast';

const ToastObjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
};

const AddProductMain = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [countInStock, setCountInStock] = useState(0);

    const dispatch = useDispatch();

    const productCreate = useSelector((state) => state.productCreate);
    const { loading, error, product } = productCreate;

    useEffect(() => {
        if (product) {
            toast.success("Product Added", ToastObjects);
            dispatch({ type: PRODUCT_CREATE_RESET });
            setName("");
            setImage("");
            setDescription("");
            setPrice(0);
            setCountInStock(0);
        }
    }, [product, dispatch])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createProduct(name, price, description, image, countInStock));
    }

    return (
        <>
            <Toast />
            <section className='content-main' style={{ maxWidth: '1200px' }}>
                {/* <form onSubmit={submitHandler}> */}
                <form onSubmit={submitHandler}>
                    <div className='content-header'>
                        <Link to='/products' className='btn btn-danger text-white'>
                            Go To Products
                        </Link>
                        <h2 className='content-title'>Add Product</h2>
                        <div>
                            <button type='submit' className='btn btn-primary'>
                                Publish now
                            </button>
                        </div>
                    </div>

                    <div className='row mb-4'>
                        <div className='col-xl-8 col-lg-8'>
                            <div className='card mb-4 shadow-sm'>
                                <div className='card-body'>
                                    {error && <Message variant='alert-danger'>{error}</Message>}
                                    {loading && <Loading />}
                                    <div className='mb-4'>
                                        <label htmlFor='product-title' className='form-label'>
                                            Product Title
                                        </label>
                                        <input type='text' placeholder='Type here' className='form-control' id='product-title' required value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>

                                    <div className='mb-4'>
                                        <label htmlFor='product-price' className='form-label'>
                                            Price
                                        </label>
                                        <input type='number' placeholder='Type here' className='form-control' id='product-price' required value={price} onChange={(e) => setPrice(e.target.value)} />
                                    </div>

                                    <div className='mb-4'>
                                        <label htmlFor='count-in-stock' className='form-label'>
                                            Count In Stock
                                        </label>
                                        <input type='number' placeholder='Type here' className='form-control' id='count-in-stock' required value={countInStock} onChange={(e) => setCountInStock(e.target.value)} />
                                    </div>

                                    <div className='mb-4'>
                                        <label htmlFor='product-price' className='form-label'>
                                            Description
                                        </label>
                                        <textarea placeholder='Type here' className='form-control' rows='7' required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                    </div>

                                    <div className='mb-4'>
                                        <label className='form-label'>Images</label>
                                        <input type='text' placeholder='Enter Image URL' className='form-control' required value={image} onChange={(e) => setImage(e.target.value)} />
                                        <input type='file' className='form-control mt-3' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default AddProductMain;