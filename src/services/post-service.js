import { BaseHttpClientService } from './base-service';

export const PostApiClient = {};

PostApiClient.GetAllPosts = async (url) => {
	try {
		const response = await BaseHttpClientService.get(url);
		return response;
	} catch (error) {
		console.log('ProductApiClient Error', error);
	}
};

PostApiClient.GetCommentsByPostId = async (url, postId) => {
	try {
		const response = await BaseHttpClientService.get(`${url}?postId=${postId}`);
		return response;
	} catch (error) {
		console.log('ProductApiClient Error', error);
	}
};

// c# proxy pattern
