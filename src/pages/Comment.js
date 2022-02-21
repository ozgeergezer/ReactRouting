import axios from 'axios';
import React, { useEffect, useState } from 'react';

// npm i axios

function Comment() {
	useEffect(async () => {
		try {
			let response = await axios.get(
				'https://jsonplaceholder.typicode.com/comments'
			);
			let data = response.data;

			console.log('comments', data);
		} catch (error) {
			console.log('err', error);
		}
	}, []);

	return <div></div>;
}

export default Comment;
