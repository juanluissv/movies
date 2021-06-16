import React, {useState, useEffect} from 'react';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { getUserDetails, logout } from '../actions/userActions';


const Profile = ({location, history}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, user } = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if(!userInfo) {
            history.push('/login')
        } else {
            if(!user.name) {
                dispatch(getUserDetails())
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user])


    const logoutHandler = () => {
        dispatch(logout())
        history.push('/login')
    }

    

    return (
        <div className="registerForm">
        <h2>User Profile</h2>
            <Form>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
            </Form>

                <Button type='submit' variant='info' className='logoutButton' onClick={logoutHandler}>
                    Logout
                </Button>

        </div>

    )
}

export default Profile