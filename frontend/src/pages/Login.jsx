import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
    const [currentState, setCurrentState] = useState('Login')
    const { token, setToken, backendUrl, setIsAdmin } = useContext(ShopContext)
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            if (currentState === 'Sign Up') {
                const response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password })
                if (response.data.success) {
                    setToken(response.data.token)
                    setIsAdmin(response.data.isAdmin) // Update isAdmin in context
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('isAdmin', response.data.isAdmin ? 'true' : 'false')
                    
                    // Direct navigation after successful sign up
                    if (response.data.isAdmin) {
                        navigate('/admin/add')
                    } else {
                        navigate('/')
                    }
                    toast.success('Registration successful! Redirecting...')
                } else {
                    toast.error(response.data.message)
                }
            } else { // Login
                const response = await axios.post(`${backendUrl}/api/user/login`, { email, password })
                if (response.data.success) {
                    setToken(response.data.token)
                    setIsAdmin(response.data.isAdmin) // Update isAdmin in context
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('isAdmin', response.data.isAdmin ? 'true' : 'false')

                    // Direct navigation after successful login
                    if (response.data.isAdmin) {
                        navigate('/admin/add')
                    } else {
                        navigate('/')
                    }
                    toast.success('Login successful! Redirecting...')

                } else {
                    toast.error(response.data.message)
                }
            }
        } catch (error) {
            console.error(error)
            toast.error(error.message)
        }
    }

    // This useEffect is now redundant and can be removed, as navigation is handled above
    // However, if you want to keep a check for already-logged-in users,
    // you can use it like this:
    useEffect(() => {
        if (token && localStorage.getItem('isAdmin') === 'true') {
            navigate('/admin/add');
        } else if (token) {
            navigate('/');
        }
    }, [token, navigate]);


    return (
        <form
            onSubmit={onSubmitHandler}
            className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'
        >
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>

            {currentState === 'Login' ? null : (
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type='text'
                    className='w-full px-3 py-2 border border-gray-800'
                    placeholder='Name'
                    required
                />
            )}

            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type='email'
                className='w-full px-3 py-2 border border-gray-800'
                placeholder='Email'
                required
            />

            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type='password'
                className='w-full px-3 py-2 border border-gray-800'
                placeholder='Password'
                required
            />

            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer'>Forgot your password?</p>
                {currentState === 'Login' ? (
                    <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>
                        Create account
                    </p>
                ) : (
                    <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>
                        Login Here
                    </p>
                )}
            </div>

            <button className='bg-black text-white font-light px-8 py-2 mt-4'>
                {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
            </button>
        </form>
    )
}

export default Login