import React, {useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {login, registration} from "../api/userApi";

const AuthPage = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const auth = async () => {
        try {
            let data;
            if(isLogin) {
                data = await login(username, password);
            } else {
                data = await registration(username, password);
            }
        } catch (e) {
            console.log(e.response.data.message)
        }
    }

    return (
        <Container
            className={'d-flex justify-content-center align-items-center'}
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 550}} className={"p-5"}>
                <h2 className={'text-center'}>{isLogin ? 'Login' : 'Registration'}</h2>
                <Form className={'d-flex flex-column'}>
                    <Form.Control
                        className={'mt-4'}
                        placeholder={'Enter username...'}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Form.Control
                        className={'mt-4'}
                        placeholder={'Enter password...'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={"password"}
                    />
                    <div className={'d-flex justify-content-between mt-5 pl-3 pr-3'}>
                        {isLogin ?
                            <div>
                                Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Register now!</NavLink>
                            </div>
                            :
                            <div>
                                Do you have an account? <NavLink to={LOGIN_ROUTE}>Sign in!</NavLink>
                            </div>
                        }
                        <Button onClick={auth} variant={'outline-success'}>
                            {isLogin ? 'Sign in' : 'Sign up'}
                        </Button>
                    </div>
                </Form>
            </Card>

        </Container>
    );
};

export default AuthPage;
