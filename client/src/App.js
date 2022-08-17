import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {getUserInfo} from "./api/userApi";

function App() {
   return (
        <div>
            <NavBar/>
            <AppRouter/>
        </div>
    );
}

export default App;
