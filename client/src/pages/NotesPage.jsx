import {useSelector} from "react-redux";
import NotesList from "../components/Notes/NotesList";

const NotesPage = () => {
    const user = useSelector(state => state.user);
    return (
        <div
            className={'bg-light'}
            style={{minHeight: window.innerHeight - 54.5}}
        >
            {user.isAuth ?
                <NotesList/>
                :
                <div
                    className={'d-flex justify-content-center align-items-center'}
                    style={{height: "90vh"}}
                >
                    <h2>You need to be authorized</h2>
                </div>
            }
        </div>
    );
};

export default NotesPage;
