import React from 'react';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../component/context/UserContext';

const Login = () => {
    const { signIn, signInWithGoogle, signInWithGithub, } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }


    const handleGitSignIn = () => {
        signInWithGithub()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='w-50 mx-auto border mb-12'>
            <h3 className='text-primary'>Login</h3>
            <Form onSubmit={handleLogin}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <input type="submit" value="Login" />
            </Form>
            <p>New to Growhand? <Link to='/register'>Create a new account</Link></p>
            <Button className='me-2 my-2' onClick={handleGitSignIn} variant="success">GitHub</Button>
            <Button className='me-2 my-2' onClick={handleGoogleSignIn} variant="success">Google</Button>
        </div>
    );
};

export default Login;