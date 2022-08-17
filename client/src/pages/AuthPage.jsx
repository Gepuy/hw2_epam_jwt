import React, {useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {LOGIN_ROUTE, NOTES_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {login, registration} from "../api/userApi";
import {useAction} from "../store/hooks/useAction";


const AuthPage = () => {
    const [error, setError] = useState('');
    const {getAuthUserData, setUserAuthStatus} = useAction();
    const location = useLocation();
    const navigator = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const auth = async () => {
        try {
            if (isLogin) {
                await login(username, password);
                await getAuthUserData();
                setUserAuthStatus(true);
                navigator(NOTES_ROUTE);
            } else {
                await registration(username, password);
                navigator(LOGIN_ROUTE);
            }
        } catch (e) {
            setError(e.response.data.message)
        }
    }

    return (
        <div
            className={'d-flex justify-content-center align-items-center bg-light'}
            style={{height: window.innerHeight - 54, width: "100vw"}}
        >
            <Card style={{width: 550}} className={"p-5"}>
                <h2 className={'text-center'}>{isLogin ? 'Login' : 'Registration'}</h2>
                <Form className={'d-flex flex-column'}>
                    <Form.Control
                        className={'mt-4'}
                        placeholder={'Enter username...'}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onFocus={() => setError('')}
                    />
                    <Form.Control
                        className={'mt-4'}
                        placeholder={'Enter password...'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={"password"}
                        onFocus={() => setError('')}
                    />
                    <p style={{margin: "0", color: "red"}}>{error}</p>
                    <div className={'d-flex justify-content-between mt-4 pl-3 pr-3'}>
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

        </div>
    );
};

export default AuthPage;
