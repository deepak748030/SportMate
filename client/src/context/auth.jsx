import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ''
    });

    useEffect(() => {
        const data = localStorage.getItem('auth');
        if (data) {
            const parseData = JSON.parse(data);
            setAuth({
                user: parseData.user,
                token: parseData.token
            });
            axios.defaults.headers.common['Authorization'] = parseData.token; // Set the token after retrieving it from localStorage
        }
    }, []); // Empty dependency array to run only once on component mount

    // Update axios header when auth changes
    useEffect(() => {
        if (auth.token) {
            axios.defaults.headers.common['Authorization'] = auth.token;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [auth.token]);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
