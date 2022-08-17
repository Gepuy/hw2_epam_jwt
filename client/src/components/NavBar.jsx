import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, NOTES_ROUTE, USER_ROUTE} from "../utils/consts";
import {useSelector} from "react-redux";
import {useAction} from "../store/hooks/useAction";
import {AiOutlineUser} from 'react-icons/ai';

const NavBar = () => {
    const navigator = useNavigate();
    const user = useSelector(state => state.user);
    const {logout} = useAction();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink className={'text-decoration-none fs-5'} style={{color: 'white'}} to={NOTES_ROUTE}>
                    Notes Service
                </NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" class={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            className="rounded-circle"
                            style={{padding: "6px 9px"}}
                            onClick={() => navigator(USER_ROUTE)}
                        >
                            <AiOutlineUser size={20}/>
                        </Button>
                        <Button
                            variant={"outline-light"}
                            className={'ms-3'}
                            onClick={logout}
                        >Log out</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" class={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigator(LOGIN_ROUTE)}
                        >Sign in</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
};

export default NavBar;
