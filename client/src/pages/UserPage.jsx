import React, {useState} from 'react';
import {Button, Card} from "react-bootstrap";
import {VscAccount} from "react-icons/vsc";
import {useSelector} from "react-redux";
import ChangePassword from "../components/Account/modals/ChangePassword";
import DeleteAccount from "../components/Account/modals/DeleteAccount";

const UserPage = () => {
    const user = useSelector(state => state.user.user);
    const [changePasswordVisible, setChangePasswordVisible] = useState(false);
    const [deleteAccountVisible, setDeleteAccountVisible] = useState(false);
    return (
        <div
            className="d-flex justify-content-center align-items-center bg-light"
            style={{minHeight: window.innerHeight - 54.5}}
        >
            <Card className={'p-4'} style={{width: "450px", height: "450px"}}>
                <div className={'d-flex align-items-center justify-content-evenly flex-column h-100'}>
                    <VscAccount size={130}/>
                    <div className="d-flex flex-column align-items-center">
                        <h5>{user?.username}</h5>
                        <p>email@email.com</p>
                    </div>
                    <div className={'d-flex justify-content-between w-75'}>
                        <Button onClick={() => setChangePasswordVisible(true)}>Change password</Button>
                        <Button onClick={() => setDeleteAccountVisible(true)} variant={'danger'}>Delete account</Button>
                    </div>
                </div>
            </Card>
            <ChangePassword show={changePasswordVisible} onHide={() => setChangePasswordVisible(false)} />
            <DeleteAccount show={deleteAccountVisible} onHide={() => setDeleteAccountVisible(false)} />
        </div>
    );
};

export default UserPage;
