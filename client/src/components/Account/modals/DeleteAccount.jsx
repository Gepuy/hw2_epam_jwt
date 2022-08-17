import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {useAction} from "../../../store/hooks/useAction";

const DeleteAccount = ({show, onHide}) => {
    const {deleteAccount} = useAction();

    const deleteUserAccount = () => {
        deleteAccount().then(() => {
            onHide();
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size={'sm'}
            centered
        >
            <Modal.Header style={{textAlign: "center"}}>
                <Modal.Title className={'w-100'}>
                    You're about to delete your account
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p
                    style={{margin: "20px 0", textAlign: "center"}}
                >All your notes will be permanently removed and you won't be able to see them again</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-secondary'} onClick={onHide}>Close</Button>
                <Button variant={'danger'} onClick={deleteUserAccount}>Delete account</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteAccount;
