import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { editProduct, updateProduct } from '../../redux/actions/productActions';
import { PRODUCT_UPDATE_RESET } from '../../redux/constants/productConstants';
import Loading from '../LoadingError/Loading';
import Message from '../LoadingError/Message';
import Toast from '../LoadingError/Toast';
import { toast } from 'react-toastify';

const ToastObjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
};

const EditProductMain = (props) => {
    const { productId } = props;
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [countInStock, setCountInStock] = useState(0);
    const [description, setDescription] = useState('');


    const productEdit = useSelector((state) => state.productEdit);
    const { loading, error, product } = productEdit;

    const productUpdate = useSelector((state) => state.productUpdate);
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = productUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET });
            toast.success("Product Updated", ToastObjects);
        } else {
            console.log(product.name);
            if (!product.name || product._id !== productId) {
                dispatch(editProduct(productId));
            } else {
                setName(product.name);
                setPrice(product.price);
                setImage(product.image);
                setCountInStock(product.countInStock);
                setDescription(product.description);
            }
        }
    }, [product, dispatch, productId, successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateProduct(
            {
                _id: productId,
                name: name,
                price: price,
                description: description,
                image: image,
                countInStock: countInStock
            }
        ))
    }

    return (
        <>
            <Toast />
            <section className='content-main' style={{ maxWidth: '1200px' }}>
                <form onSubmit={submitHandler}>
                    <div className='content-header'>
                        <Link to='/products' className='btn btn-danger text-white'>
                            Go To Products
                        </Link>
                        <h2 className='content-title'>Update Product</h2>
                        <div>
                            <button type='submit' className='btn btn-primary'>Publish now</button>
                        </div>
                    </div>

                    <div className='row mb-4'>
                        <div className='col-xl-12 col-lg-12'>
                            <div className='card mb-4 shadow-sm'>
                                <div className='card-body'>
                                    {errorUpdate && (<Message variant='alert-danger'>{errorUpdate}</Message>)}
                                    {loadingUpdate ?
                                        <Loading /> :
                                        error ?
                                            (<Message variant='alert-danger'>{error}</Message>) :
                                            (
                                                <>
                                                    <div className='mb-4'>
                                                        <label htmlFor='product_title' className='form-label'>
                                                            Product Title
                                                        </label>
                                                        <input type='text' placeholder='Type here' className='form-control' id='product_title' required value={name} onChange={(e) => setName(e.target.value)} />
                                                    </div>

                                                    <div className='mb-4'>
                                                        <label htmlFor='product_price' className='form-label'>
                                                            Price
                                                        </label>
                                                        <input type='number' placeholder='Type here' className='form-control' id='product_price' required value={price} onChange={(e) => setPrice(e.target.value)} />
                                                    </div>

                                                    <div className='mb-4'>
                                                        <label htmlFor='count_in_stock' className='form-label'>
                                                            Count In Stock
                                                        </label>
                                                        <input type='number' placeholder='Type here' className='form-control' id='count_in_stock' required value={countInStock} onChange={(e) => setCountInStock(e.target.value)} />
                                                    </div>

                                                    <div className='mb-4'>
                                                        <label className='form-label'>
                                                            Description
                                                        </label>
                                                        <textarea placeholder='Type here' className='form-control' rows='7' required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                                    </div>

                                                    <div className='mb-4'>
                                                        <label className='form-label'>
                                                            Images
                                                        </label>
                                                        <input type='text' className='form-control' required value={image} onChange={(e) => setImage(e.target.value)} />
                                                        <img src={image} className="form-control w-50" alt="Product" />
                                                    </div>
                                                </>
                                            )}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default EditProductMain;