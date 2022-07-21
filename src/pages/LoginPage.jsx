import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const fromPage = location.state?.from?.pathname || '/'

    return (
        <div>
            <h1>Login Page</h1>
            {fromPage}
        </div>
    );
};

export default LoginPage;