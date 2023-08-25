import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='navigation'>

                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/order"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Order
                </NavLink>

                <NavLink
                    to="/manage-inventory"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Manage Inventory
                </NavLink>
                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Login
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;