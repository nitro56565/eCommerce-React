import { useEffect, useState } from "react";
import axios from "axios";

const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // ✅ Try getting user details from the backend
                const res = await axios.get("http://localhost:3000/api/user", { withCredentials: true });
                setUser(res.data.user);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.log("🔄 Access token expired. Trying to refresh...");

                    try {
                        // ✅ Refresh Access Token
                        await axios.post("http://localhost:3000/api/refreshToken", {}, { withCredentials: true });

                        // ✅ Retry Fetching User Data
                        const res = await axios.get("http://localhost:3000/api/user", { withCredentials: true });
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

    return user; // Return user so other components can access it
};

export default useAuth;
