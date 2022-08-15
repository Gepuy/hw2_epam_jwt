import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {getUserInfo} from "./api/userApi";

function App() {
getUserInfo().then(data => data);
   return (
        <>
            <NavBar/>
            <AppRouter/>
        </>
    );
}

export default App;
