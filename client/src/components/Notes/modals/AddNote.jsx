import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useAction} from "../../../store/hooks/useAction";

const AddNote = ({show, onHide}) => {
    let [noteText, setNoteText] = useState('');
    const {addNewUserNote} = useAction();

    const addNote = (text) => {
        addNewUserNote(text).then(data => {
            setNoteText('');
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
                    Add new note
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        as={"textarea"}
                        rows={3}
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                        placeholder={'Enter note text'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-secondary'} onClick={onHide}>Close</Button>
                <Button variant={'outline-success'} onClick={() => addNote(noteText)}>Add Note</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddNote;
