import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Footer() {
	return (
		<>
			<Card className="text-center">
				<Card.Header>Nbuy Sabah</Card.Header>
				<Card.Body>
					<Card.Title>Bir eğitim kurumundan daha fazlası</Card.Title>
					<Card.Text>
						Gaziosmanpaşa Ali Fuat Başgil Metro İstasyonu 400 m yukarısı.
					</Card.Text>
					<Button variant="primary">&copy NBUY SABAH</Button>
				</Card.Body>
				<Card.Footer className="text-muted">18.02.2022</Card.Footer>
			</Card>
		</>
	);
}

export default Footer;
