import axios, { AxiosError, AxiosResponse } from "axios";
// import { redirect } from "react-router-dom";

const req = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    withCredentials: true,
})

req.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error: AxiosError) => {
        if (error.response?.status === 401) {
            try {
                const res = await axios.get("http://localhost:8080/api/v1/refresh", {
                    withCredentials: true,
                });
                if (res.status === 200) {
                    return error.config;
                }

            } catch (error) {
                console.log(error);
                // redirect("/login");
                window.location.href = "/login";

            }
        }
        if (error.response?.status === 400) {
            console.log(error, "fromr the intercepter");
            // redirect("/login");
            window.location.href = "/login";
        }
        throw error;

    }
)


export default req;