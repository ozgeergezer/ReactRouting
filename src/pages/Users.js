import React, { useEffect, useState } from 'react';
import { ListGroup, Modal } from 'react-bootstrap';
import _ from 'lodash';

function Users() {
	const [first, setfirst] = useState('ali');
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null); // modal kapalı

	// useEffect ise component doma basıldığında tetiklenen bir hook
	// apiden veri çekmek için idealdir. 1 kereye mahsus çalışır.
	useEffect(() => {
		console.log('useEffect-1');

		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				let orderedResponse = _.orderBy(data, ['username'], ['asc']);
				setUsers([...orderedResponse]);
			});
	}, []); // [] şeklinde kullandığımızda ise component doma yüklenirken 1 kez tetiklenir.

	// component doma girdiğinde tetiklenir. class componentlerde didmount

	// component didupdate first state değiştirince tetiklenir.
	useEffect(() => {
		console.log('useEffect-2');
	}, [first]);

	// useEffect(() => {
	// 		console.log('useEffect-2');
	// 	}, [second,first]); // Hem second hemde first deki değişikliği takip eder. İkisinden herhangi birinde değişiklik olduğunda tetiklenir.

	// useEffect(() => {
	// 	console.log('useEffect-3');
	// }); // Her durumda tetiklenir. sonsuz loop gibi olur. dikkat edelim.

	const changeName = () => {
		setfirst('muhammed');
	};

	const hide = () => {
		setSelectedUser(null);
	};

	// user seçim işlemi yaptık
	const select = (item) => {
		setSelectedUser(item);
	};

	return (
		<div>
			{/* {first}
			<button onClick={changeName}>Change Name</button> */}
			<ListGroup>
				{users.map((item) => {
					return (
						<ListGroup.Item onClick={() => select(item)} key={item.id}>
							{item.username}
						</ListGroup.Item>
					);
				})}
			</ListGroup>

			<Modal
				size="sm"
				show={selectedUser == null ? false : true}
				onHide={() => hide()}
				aria-labelledby="example-modal-sizes-title-sm"
			>
				<Modal.Header closeButton>
					<Modal.Title id="example-modal-sizes-title-sm">User Info</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						<b>Email:</b> {selectedUser?.email}
					</p>
					<p>
						<b>Address:</b> {selectedUser?.address?.street},{' '}
						{selectedUser?.address?.suite} ,{selectedUser?.address?.city}
					</p>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default Users;
