import AppRouter from "./components/AppRouter";
import {getUserNotes} from "./api/notesApi";
import NavBar from "./components/NavBar";


function App() {
    getUserNotes().then(data => data);
    return (
        <>
            <NavBar/>
            <AppRouter/>
        </>
    );
}

export default App;
