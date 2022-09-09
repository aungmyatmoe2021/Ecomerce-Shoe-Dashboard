// import package
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import MainProducts from '../components/products/MainProducts';
import Sidebar from './../components/Sidebar';

const ProductScreen = () => {
    const match = useParams();
    const pageNumber = match.pageNumber;
    return (
        <>
            <Sidebar />
            <main className='main-wrap'>
                <Header />
                <MainProducts pageNumber={pageNumber} />
            </main>
        </>
    );
};

export default ProductScreen;