// Path: admin/App.jsx

import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Admin Components
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "$";

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true');
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';
        setToken(storedToken || '');
        setIsAdmin(storedIsAdmin);
    }, []);

    const handleLogin = (newToken, newIsAdmin) => {
        setToken(newToken);
        setIsAdmin(newIsAdmin);
        localStorage.setItem('token', newToken);
        localStorage.setItem('isAdmin', newIsAdmin ? 'true' : 'false');
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        setToken('');
        setIsAdmin(false);
        navigate('/login');
    };

    if (token && isAdmin) {
        return (
            <div className='bg-gray-50 min-h-screen'>
                <ToastContainer />
                <div className='flex w-full'>
                    <Sidebar logout={logout} />
                    <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
                        <Routes>
                            <Route path='/' element={<Add token={token} />} />
                            <Route path='/add' element={<Add token={token} />} />
                            <Route path='/list' element={<List token={token} />} />
                            <Route path='/orders' element={<Orders token={token} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='bg-gray-50 min-h-screen'>
                <ToastContainer />
                <Routes>
                    <Route path='/*' element={<Login handleLogin={handleLogin} />} />
                </Routes>
            </div>
        );
    }
};

export default App;