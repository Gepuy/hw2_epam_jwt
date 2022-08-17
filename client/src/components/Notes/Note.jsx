import {useState} from 'react';
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import {useAction} from "../../store/hooks/useAction";
import EditNote from "./modals/EditNote";
import {FormCheck} from "react-bootstrap";

const Note = ({id, text, date, completed}) => {
    const {removeUserNote} = useAction();
    const [modalVisible, setModalVisible] = useState(false);
    const {completeUserNote} = useAction();
    const fullDate = new Date(date);
    return (
        <div
            className={"mb-3 bg-light d-flex flex-column justify-content-between bg-white"}
            style={{
                boxShadow: "0px 0px 12px rgba(61, 55, 61, 0.7)",
                width:"32%",
                padding: "1rem",
                borderRadius: "10px",
                minHeight: "200px"
            }}
        >
            <span style={{whiteSpace: "pre-wrap"}}>{text}</span>
            <div className={'d-flex justify-content-between'}>
                <small>{fullDate.toLocaleDateString()}</small>
                <div className={'d-flex'}>
                    <FormCheck
                        style={{marginRight: '10px'}}
                        defaultChecked={completed}
                        onClick={() => completeUserNote(id)}
                    />
                    <AiOutlineEdit
                        size={22}
                        style={{cursor: "pointer", marginRight: '10px'}}
                        onClick={() => setModalVisible(true)}
                    />
                    <AiOutlineDelete
                        size={22}
                        style={{cursor: "pointer"}}
                        onClick={() => removeUserNote(id)}
                    />
                </div>
            </div>
            <EditNote
                show={modalVisible}
                onHide={() => setModalVisible(false)}
                noteText={text}
                noteId={id}
            />
        </div>
    );
};

export default Note;
