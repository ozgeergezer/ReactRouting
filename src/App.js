import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router';
import Layout from './components/Layout';
// Outlet c# daki renderbody denk gelir. eğer sayfalar arası geçiş olacak ise bunu koymak zorundayız

function App() {
	return (
		<div className="App">
			<Layout />
		</div>
	);
}

export default App;
