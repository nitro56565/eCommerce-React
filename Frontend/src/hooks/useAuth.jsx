import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`${API_URL}/user`, { withCredentials: true });
                setUser(res.data.user);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.log("🔄 Access token expired. Trying to refresh...");

                    try {
                        
                        await axios.post(`${API_URL}/refreshToken`, {}, { withCredentials: true });

                        const res = await axios.get(`${API_URL}/user`, { withCredentials: true });
                        setUser(res.data.user);
                    } catch (refreshError) {
                        console.error("❌ Refresh token failed. Redirecting to login...");
                        setUser(null);
                    }
                }
            }
        };

        fetchUser();
    }, []);

    return user; 
};

export default useAuth;
