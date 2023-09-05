import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const Header = () => {
    const {user,logOut,setUser} = useContext(AuthContext);
    const handleSignOut = () =>{
        logOut()    
            .then(() =>{
                setUser(null);
            })
    }
    // console.log(user)
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
             {!user &&   <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Login
                </NavLink>}
             { !user &&   <NavLink
                    to="/sign-up"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    SignUp
                </NavLink>}
             {user &&   <p>Welcome <span className='text-white font-bold'>{user.displayName}</span></p>}
             {user && <button onClick={handleSignOut}>LogOut</button>}
            </div>
        </nav>
    );
};

export default Header;