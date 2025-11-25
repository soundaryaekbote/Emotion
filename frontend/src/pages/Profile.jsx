import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Profile = () => {
  const { token, backendUrl, navigate } = useContext(ShopContext);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (token) {
        try {
          const response = await axios.get(backendUrl + '/api/user/profile', {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.data.success) {
            setUserData(response.data.user);
          } else {
            console.error('Failed to fetch user data:', response.data.message);
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [token, backendUrl, navigate]);

  return (
    <div className="min-h-screen bg-[#f7f5f2] py-12 px-4 sm:px-6 lg:px-8 font-serif">
      <div className="max-w-3xl mx-auto text-center">
        {/* Logo at the top */}
        <div className="mb-8">
          <img src={assets.logo} alt="Emotion Logo" className="mx-auto h-24 w-auto object-contain" />
        </div>
        
        <h1 className="text-4xl font-extrabold text-[#2a2a2a] mb-6 tracking-widest">MY PROFILE</h1>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          Welcome to your personalized space. Here you can view your details and orders.
        </p>

        {isLoading ? (
          <div className="flex justify-center items-center h-48">
            <p className="text-lg text-[#b8860b] animate-pulse">Loading your premium experience...</p>
          </div>
        ) : userData ? (
          <div className="bg-white shadow-2xl rounded-xl p-8 max-w-xl mx-auto border border-[#f0e68c] transform transition-all hover:scale-[1.01] duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-[#2a2a2a] mb-6 border-b pb-3 border-[#f0e68c]">Account Details</h2>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 bg-[#fdfaf5] rounded-lg shadow-sm">
                <span className="text-gray-600 font-medium sm:w-1/3 text-left">Username:</span>
                <span className="text-[#3b3b3b] font-bold text-right sm:w-2/3 mt-1 sm:mt-0">{userData.name}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 bg-[#fdfaf5] rounded-lg shadow-sm">
                <span className="text-gray-600 font-medium sm:w-1/3 text-left">Email:</span>
                <span className="text-[#3b3b3b] font-bold text-right sm:w-2/3 mt-1 sm:mt-0">{userData.email}</span>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-[#f0e68c] flex justify-center">
              <button 
                onClick={() => navigate('/orders')} 
                className="px-8 py-3 bg-gradient-to-r from-[#b8860b] to-[#c7a452] text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:from-[#c7a452] hover:to-[#b8860b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b8860b]"
              >
                View Orders
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 bg-white shadow-md rounded-lg p-8 max-w-md mx-auto">
            <svg className="h-16 w-16 text-[#b8860b] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-xl text-[#b8860b] font-medium mb-4">Access Denied</p>
            <p className="text-gray-700 text-base">Please log in to view your profile details.</p>
            <button 
              onClick={() => navigate('/login')} 
              className="mt-6 px-8 py-3 bg-gradient-to-r from-[#b8860b] to-[#c7a452] text-white font-medium rounded-lg shadow-md hover:from-[#c7a452] hover:to-[#b8860b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b8860b] transition duration-300"
            >
              Go to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;