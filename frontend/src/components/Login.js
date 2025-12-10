import React, {useState, useEffect} from 'react';
import { Link, useNavigate, Redirect } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { login } from '../actions/userActions';

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, userInfo } = userLogin

    useEffect(() => {
        if(userInfo) {
            navigate('/favorites')
        }
    }, [navigate, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
    <div className="registerForm">
        <h2 className='loginTittle '>Sign In</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>EMAIL: <small>demo@demo.com</small></Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        className='loginInput'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>PASSWORD: <small>demo</small></Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        className='loginInput'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Sign in
                </Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    New Customer?{' '}
                    <Link to='/register'>
                        Register
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default Login;