import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    console.log(loading);
    console.log(user)
    
    
    if(user){
        return children;
    }
    if( loading){
        return <div>Loading...</div>
    }

    return  <Navigate to='/login'  state={{ from: location }} replace />
        // state={{ from: location }} replace
    
};

export default PrivateRoute;