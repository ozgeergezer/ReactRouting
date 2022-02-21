import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Link className="nav-item nav-link" to="/">
					<Navbar.Brand>Anasayfa</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Link className="nav-item nav-link" to="/">
							Anasayfa
						</Link>
						<Link className="nav-item nav-link" to="/about">
							About
						</Link>

						<NavDropdown title="Api" id="collasible-nav-dropdown">
							<NavDropdown.Item>
								<Link className="nav-item nav-link text-dark" to="/users">
									Users
								</Link>
								<Link className="nav-item nav-link text-dark" to="/comments">
									Comments
								</Link>
								<Link className="nav-item nav-link text-dark" to="/posts">
									Posts
								</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Link className="nav-item nav-link" to="/profile">
							Muhammed
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
