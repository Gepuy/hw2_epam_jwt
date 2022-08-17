import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useSelector} from "react-redux";
import {changeUserPassword} from "../../../api/userApi";

const ChangePassword = ({show, onHide}) => {
    let user = useSelector(state => state.user.user);
    let [error, setError] = useState('')
    let [oldPassword, setOldPassword] = useState('');
    let [newPassword, setNewPassword] = useState('');

    const changePassword = async (oldPassword, newPassword, user) => {
        try {
            await changeUserPassword(oldPassword, newPassword, user);
            setOldPassword('');
            setNewPassword('')
            onHide();
        } catch (e) {
            setError(e.response.data.message)
        }
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size={'sm'}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Change password
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        placeholder={'Enter old password'}
                        onFocus={() => setError('')}
                    />
                    <Form.Control
                        className={'mt-2'}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder={'Enter new password'}
                    />
                </Form>
                <p style={{margin: "0", color: "red"}}>{error}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-secondary'} onClick={onHide}>Close</Button>
                <Button
                    variant={'outline-success'}
                    onClick={() => changePassword(oldPassword, newPassword, user)}
                >Change password</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ChangePassword;
