import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    return (
        <>
        <header>
            <Navbar  expand="lg" collapseOnSelect className="navbar-dark bg-dark nav1">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand >
                        <h4 className="logofont">Discover Movies</h4>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto headtext">                        
                            <LinkContainer to='/search'>
                                <Nav.Link>
                                    SEARCH
                                </Nav.Link>
                            </LinkContainer>  
                            <LinkContainer to='/genre'>
                                <Nav.Link>
                                    GENRE
                                </Nav.Link>
                            </LinkContainer>
                            
                            {userInfo ? (
                            <>    
                            <LinkContainer to='/favorites'>
                                <Nav.Link>
                                    FAVORITES
                                </Nav.Link>
                            </LinkContainer> 
                            <LinkContainer to='/profile'>
                                <Nav.Link>
                                    PROFILE
                                </Nav.Link>
                            </LinkContainer>  
                            </>
                            ) : (
                            <LinkContainer to='/login'>
                                <Nav.Link>
                                    LOGIN
                                </Nav.Link>
                            </LinkContainer>                               
                           
                            )}                                                                      
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>    
        </header>
        </>
    )
}

export default Header