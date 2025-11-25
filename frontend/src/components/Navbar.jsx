import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [userName, setUserName] = useState('');

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems, backendUrl } =
    useContext(ShopContext);

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const response = await axios.get(backendUrl + '/api/user/profile', {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.data.success) {
            setUserName(response.data.user.name);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchUser();
  }, [token, backendUrl]);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
    setUserName('');
    toast.success("You've been logged out successfully!");
  };

  const navLinkClass = ({ isActive }) =>
    `relative px-2 py-1 font-medium transition-all duration-300
    ${isActive ? 'text-black after:w-full' : 'text-gray-600 hover:text-black'}
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
    after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:w-0
    after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <div className="flex items-center justify-between py-5 font-medium border-b border-gray-200 bg-white/70 backdrop-blur-md sticky top-0 z-50 px-4 md:px-10">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="w-40 drop-shadow-md" alt="logo" />
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden sm:flex gap-8 text-sm">
        <NavLink to="/" className={navLinkClass}>
          HOME
        </NavLink>
        <NavLink to="/collection" className={navLinkClass}>
          COLLECTION
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          ABOUT
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          CONTACT
        </NavLink>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <img
          onClick={() => {
            setShowSearch(true);
            navigate('/collection');
          }}
          src={assets.search_icon}
          className="w-6 cursor-pointer hover:scale-110 transition-transform"
          alt="search"
        />

        {/* Profile */}
        <div className="group relative flex items-center gap-2">
          <img
            onClick={() => (token ? null : navigate('/login'))}
            className="w-6 cursor-pointer transition-transform"
            src={assets.profile_icon}
            alt="profile"
          />

          {/* Show user name if logged in */}
          {token && userName && (
            <span className="text-sm font-medium text-gray-700 hidden sm:block">
              Hello, {userName}
            </span>
          )}

          {/* Dropdown */}
          {token && (
            <div className="group-hover:block hidden absolute right-0 pt-4">
              <div className="flex flex-col gap-2 w-44 py-3 px-5 bg-white border border-gray-200 shadow-xl rounded-xl text-gray-600">
                <Link to="/profile" className="cursor-pointer hover:text-black transition">
                  👤 My Profile
                </Link>
                <p
                  onClick={() => navigate('/orders')}
                  className="cursor-pointer hover:text-black transition"
                >
                  📦 Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-red-500 transition">
                  🚪 Logout
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-6 min-w-6 hover:scale-110 transition-transform"
            alt="cart"
          />
          <p className="absolute right-[-8px] bottom-[-8px] w-5 h-5 text-center leading-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-[10px] font-bold shadow-md">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-6 cursor-pointer sm:hidden hover:scale-110 transition-transform"
          alt="menu"
        />
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl transition-all duration-500 ${
          visible ? 'w-3/4' : 'w-0'
        } overflow-hidden z-50`}
      >
        <div className="flex flex-col text-gray-700 h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer border-b"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="back" />
            <p className="font-semibold">Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border-b hover:bg-gray-100 transition"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border-b hover:bg-gray-100 transition"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border-b hover:bg-gray-100 transition"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border-b hover:bg-gray-100 transition"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;