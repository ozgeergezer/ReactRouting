import axios from 'axios';

export const BaseHttpClientService = {};

BaseHttpClientService.get = async (url) => {
	try {
		let response = await axios.get(url);
		let data = response.data;

		return data;
	} catch (error) {
		throw new Error(error);
	}
};

BaseHttpClientService.post = async (url, param) => {
	try {
		// ilgili url param gönder headers' application/json formatında olsun
		const response = await axios.post(url, param, {
			headers: { 'Content-Type': 'application/json' },
		});
		return response.data;
	} catch (error) {
		console.error(`baseService.post`, error);
	}
};
