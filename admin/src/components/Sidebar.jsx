import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
    const linkClass =
        "flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l";

    return (
    <div className="w-[18%] min-h-screen border-r-2">
        <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
            <NavLink
                to="/add" // <-- Corrected path
                end
                className={({ isActive }) =>
                    `${linkClass} ${isActive ? "bg-gray-200 font-semibold" : ""}`
                }
            >
                <img className="w-5 h-5" src={assets.add_icon} alt="Add Icon" />
                <p className="hidden md:block">Add Items</p>
            </NavLink>

            <NavLink
                to="/list" // <-- Corrected path
                className={({ isActive }) =>
                    `${linkClass} ${isActive ? "bg-gray-200 font-semibold" : ""}`
                }
            >
                <img className="w-5 h-5" src={assets.order_icon} alt="List Icon" />
                <p className="hidden md:block">List Items</p>
            </NavLink>

            <NavLink
                to="/orders" // <-- Corrected path
                className={({ isActive }) =>
                    `${linkClass} ${isActive ? "bg-gray-200 font-semibold" : ""}`
                }
            >
                <img className="w-5 h-5" src={assets.order_icon} alt="Orders Icon" />
                <p className="hidden md:block">Orders</p>
            </NavLink>
        </div>
    </div>
);
};

export default Sidebar;