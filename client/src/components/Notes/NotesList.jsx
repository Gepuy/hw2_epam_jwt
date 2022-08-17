import React, {useEffect, useState} from 'react';
import Note from "./Note";
import {Button, Spinner} from "react-bootstrap";
import AddNote from "./modals/AddNote";
import {useAction} from "../../store/hooks/useAction";
import {useSelector} from "react-redux";

const NotesList = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const notes = useSelector(state => state.notes.userNotes);
    const loading = useSelector(state => state.notes.loading)
    let {setUserNotes, setLoading} = useAction();

    useEffect(() => {
        setLoading(true)
        setUserNotes().then(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <Spinner animation="border" role="status" style={{position: "absolute", left:"50%", top:"50%"}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
        <div className={'d-flex flex-column'}>
            <h2 className={'text-center mt-5'}>My notes</h2>
            <div className={'d-flex flex-wrap mt-4'} style={{margin: "0 10vw", columnGap: "17px"}}>
                {notes.map((note) => (
                    <Note
                        key={note._id}
                        id={note._id}
                        text={note.text}
                        date={note.createdDate}
                        completed={note.completed}
                    />
                ))}
            </div>
            <Button
                className={'mx-auto mt-2 mb-4'}
                onClick={() => setModalVisible(true)}
            >Add new note</Button>
            <AddNote show={modalVisible} onHide={() => setModalVisible(false)}/>
        </div>
    );
};

export default NotesList;
