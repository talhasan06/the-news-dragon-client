import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const {createUser}=useContext(AuthContext);
    const [accept,setAccept]=useState(false);

    const navigate=useNavigate();

    const handleRegister=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photoURL=form.photoURL.value;
        const email=form.email.value;
        const password=form.password.value;

        console.log(name,photoURL,email,password);

        createUser(email,password)
        .then(result =>{
            const createdUser=result.user;
            console.log(createdUser);
            navigate('/category/0')
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    const handleAccepted=event=>{
        setAccept(event.target.checked);
    }

    return (
        <Container className='w-25 mx-auto'>
            <h3 className='text-center'>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Photo URL" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                     onClick={handleAccepted}
                    type="checkbox" 
                    name="accept" 
                    label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
                </Form.Group>
                <Button variant="primary" disabled={!accept} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className='text-success'>
                    Already have an account?<Link to="/login">Login</Link>
                </Form.Text>
                <Form.Text className="text-danger">
                    
                </Form.Text>
                <Form.Text className="text-success">
                    
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;