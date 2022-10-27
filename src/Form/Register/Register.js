import React from 'react';
import { useContext } from 'react';

import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../component/context/UserContext';

const Register = () => {

    const { user, createUser, handleUpdateProfile } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(fullName, email, password,);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateProfile(fullName, photoURL)
                    .then(() => {
                        console.log("profile Updated")
                    })
            })
            .catch(error => {
                console.error('error', error);
            })


    }





    return (
        <div className='w-50 mx-auto border my-12'>
            <h3 className='text-primary'>Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>fullName</Form.Label>
                    <Form.Control type="text" name='fullName' placeholder="Enter your fullName" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicphoto">
                    <Form.Label>photoURL</Form.Label>
                    <Form.Control defaultValue={user?.photoURL} type="text" name='photoURL' placeholder="Enter photoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <input type="submit" value="Sign Up" />
            </Form>
            <br />



            <p>Already Have an Account?<Link to='/login'>Login</Link></p>
        </div>

    );
};

export default Register;