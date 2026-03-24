import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';
import Home from '../pages/Home';

const Root = () => {
    return (
<>
            <Header /> 
            <div className='max-w-6xl mx-auto my-5 py-5 flex flex-col gap-5'>
                <main className='py-20'>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Root;