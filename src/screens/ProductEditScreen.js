import React from 'react';
import Sidebar from './../components/Sidebar';
import Header from './../components/Header';
import EditProductMain from '../components/products/EditProductMain';
import { useParams } from 'react-router-dom';

const ProductEditScreen = () => {
    const match = useParams();
    const productId = match.id;
    return (
        <>
            <Sidebar />
            <main className='main-wrap'>
                <Header />
                <EditProductMain productId={productId} />
            </main>
        </>
    );
};

export default ProductEditScreen;