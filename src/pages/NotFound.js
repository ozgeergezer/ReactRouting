import React from 'react';
import { Link } from 'react-router-dom';

// Link sayfa yönlendirmesini sağlar

function NotFound() {
	return (
		<div>
			Sayfa bulunamadı. Anasayfaya yönlenmek için <Link to="/">Tıklayınız</Link>{' '}
		</div>
	);
}

export default NotFound;
