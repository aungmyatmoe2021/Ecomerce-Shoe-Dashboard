// import package
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../redux/actions/productActions';
import LatestOrder from './LatestOrder';
import ProductsStatistics from './ProductsStatistics';
import SaleStatistics from './SaleStatistics';

// import component
import TopTotal from './TopTotal';

const Main = () => {
    const dispatch = useDispatch();

    const ordersList = useSelector((state) => state.ordersList);
    const { loading, error, orders } = ordersList;

    const productList = useSelector((state) => state.productList);
    const { products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    return (
        <>
            <section className='content-main'>
                <div className='content-header'>
                    <h2 className='content-title'>Dashboard</h2>
                </div>

                {/* Top Total */}
                <TopTotal orders={orders} products={products} />

                <div className='row'>
                    {/* STATICS REPORT */}
                    <SaleStatistics />
                    <ProductsStatistics />
                </div>

                {/* Latest Orders */}
                <div className='card mb-4 shadow-sm'>
                    <LatestOrder orders={orders} loading={loading} error={error} />
                </div>
            </section>
        </>
    );
};

export default Main;