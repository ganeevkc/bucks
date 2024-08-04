import axios from "axios";
// import authInterceptor from "../../../../backend/middlewares/authInterceptor.js";
import Cookies from "js-cookie";
export const getLoginApi = async (info) => {
	try {
		// const token = localStorage.getItem("token");
		// const token = getCookie("cookie");
		const token = Cookies.get("auth_token");
		// console.log("token is:: ", token); //correctttt
		// console.log(info);
		// const authInterceptor = axios.interceptors.request.use((config) => {
		// 	const token = localStorage.getItem("token");
		// });
		//interceptor create and save token here
		//call axios instance
		axios.interceptors.request.use(
			(config) => {
				const token = Cookies.get("auth_token"); // Replace with your preferred storage method
				// const token = localStorage.getItem("token");
				if (token) {
					config.headers.Authorization = `Bearer ${token}`;
				}

				return config;
			},
			(error) => {
				return Promise.reject(error);
			}
		);

		const response = await axios.post(
			import.meta.env.VITE_LOGIN_URL,
			JSON.stringify(info),
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,

					// "Set-Cookie": `token=${token}`,
				},
			}
		);
		console.log(response.data);
		// axios.interceptors.request.eject(authInterceptor);
		return response.data; //userId
	} catch (error) {
		console.error("Error:", error);
		throw error;
	}
};
// function getCookie(name) {
// 	const value = `; ${document.cookie}`;
// 	const parts = value.split(`; ${name}=`);
// 	if (parts.length === 2) return parts.pop().split(";").shift();
// }

// Output: "myValue"
