import React, { useContext } from 'react';
import logo from "../../assets/logo.png"
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const {user}=useContext(AuthContext);
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='danger' style={50}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            {/* NAVBAR */}
        </Container>
    );
};

export default Header;