import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import AddProductMain from '../components/products/AddProductMain';

const AddProductScreen = () => {
    return (
        <>
            <Sidebar />
            <main className='main-wrap'>
                <Header />
                <AddProductMain />
            </main>
        </>
    );
};

export default AddProductScreen;