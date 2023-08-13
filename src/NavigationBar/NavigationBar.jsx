import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">

                        <Link to="/category/0">Home</Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Career</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user && <FaUserCircle></FaUserCircle>
                        }
                        
                        {
                            user ? <Button onClick={handleLogOut} variant="secondary">LogOut</Button>:
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;