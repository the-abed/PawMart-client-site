import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Navbar from '../components/common/Navbar';

const MainLayout = () => {
    return (
        <div>
            
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;