import React from 'react';
import { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../component/context/UserContext';



const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (

        <div>
            <Navbar bg="primary" variant="dark">

                <Nav className='p-3 me-5'>
                    <img
                        src="https://st.depositphotos.com/1378583/1263/v/950/depositphotos_12633382-stock-illustration-bright-education-logo.jpg"
                        width="40"
                        height="40"
                        className="d-inline-block align-top rounded mt-2"
                        alt=""
                    />
                    <Link to='/' className='text-white fs-1 text-decoration-none'>Growhand</Link>
                </Nav>

                <Link className='text-white me-5 my-2 text-decoration-none' to='/'>Home</Link>
                <Link className='text-white me-5  my-2 text-decoration-none' to='/courses'>Courses</Link>
                <Link className='text-white me-5 my-2 text-decoration-none' to='/blog'>Blog</Link>
                <Link className='text-white me-5 my-2 text-decoration-none' to='/faq'>FAQ</Link>
                {
                    user?.uid ?
                        <Link onClick={logOut} className='text-white me-5 my-2 text-decoration-none' to='/login'>LogOut</Link>
                        :
                        <>
                            <Link className='text-white me-5 my-2 text-decoration-none' to='/login'>Login</Link>
                            <Link className='text-white me-5 my-2 text-decoration-none' to='/register'>Register</Link>
                        </>
                }
                <span>{user?.email}</span>


            </Navbar>
        </div>

    );
};

export default Header;