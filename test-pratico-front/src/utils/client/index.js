// Packages
import axios from "axios";

const apiClient = () => {
	const BASE_URL  = "https://jsonplaceholder.typicode.com/";

	return axios.create({
		baseURL: BASE_URL,
		responseType: "json",
	});

};

export default apiClient;
