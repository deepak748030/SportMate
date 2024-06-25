import { useState, useEffect } from 'react';
import { useAuth } from '../context/auth';
import { Outlet } from 'react-router-dom';
import Spinner from '../components/Spinner';
import axios from 'axios';
import apiUrl from '../api/config'

const PrivateRoute = () => {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get(`${apiUrl}/user-auth`);
                if (res.data.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                }
            } catch (error) {
                console.error('Error fetching auth status:', error);
                setOk(false);
            }
        };

        if (auth?.token) {
            authCheck();
        }
    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinner />;
};

export default PrivateRoute;
