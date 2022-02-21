import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Users from './pages/Users';
import Comment from './pages/Comment';
import Post from './pages/Post';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/" element={<App />}>
					<Route path="/about" element={<About />}></Route>
					<Route path="" element={<Home />}></Route>
					<Route path="/users" element={<Users />}></Route>
					<Route path="/comments" element={<Comment />}></Route>
					<Route path="/posts" element={<Post />}></Route>
					{/* anasayfaya yönledirdik */}
				</Route>

				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
