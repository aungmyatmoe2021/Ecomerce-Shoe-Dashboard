import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import OrderDetailmain from '../components/orders/OrderDetailmain';
import Sidebar from '../components/Sidebar';

const OrderDetailScreen = () => {
    const match = useParams();
    const orderId = match.id;
    return (
        <>
            <Sidebar />
            <main className='main-wrap'>
                <Header />
                <OrderDetailmain orderId={orderId} />
            </main>
        </>
    );
};

export default OrderDetailScreen;