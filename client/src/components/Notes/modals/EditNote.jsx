import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useAction} from "../../../store/hooks/useAction";

const EditNote = ({show, onHide, noteText, noteId}) => {
    let [newNoteText, setNewNoteText] = useState(noteText);
    const {editUserNote} = useAction();

    const editNote = (text) => {
        editUserNote(noteId, text).then(() => {
            setNewNoteText('');
            onHide();
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size={'lg'}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit note
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        as={"textarea"}
                        rows={5}
                        value={newNoteText}
                        onChange={(e) => setNewNoteText(e.target.value)}
                        placeholder={'Enter note text'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
                <Button variant={'outline-success'} onClick={() => editNote(newNoteText)}>Edit Note</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditNote;
