import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, NOTES_ROUTE} from "../utils/consts";
import {useNavigate} from 'react-router-dom';

const NavBar = () => {
    const navigator = useNavigate();
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink className={'text-decoration-none'} style={{color: 'white'}} to={NOTES_ROUTE}>Notes
                    Service</NavLink>

                <Nav className="ml-auto" class={{color: 'white'}}>
                    <Button
                        variant={"outline-light"}
                        onClick={() => navigator(LOGIN_ROUTE)}
                    >Sign in</Button>
                </Nav>

            </Container>
        </Navbar>
    );
};

export default NavBar;
