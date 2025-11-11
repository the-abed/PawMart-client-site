import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            
            <nav>
                <Navbar></Navbar>
            </nav>

            <main className='flex-1'>
                <Outlet></Outlet>
            </main>

            <footer className=''>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;