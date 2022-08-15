import {Routes, Route, Navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../utils/routes';
import {NOTES_ROUTE} from "../utils/consts";
import {useSelector} from "react-redux";

const AppRouter = () => {
    const user = useSelector(state=> state.user);
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={<Component/>} exact/>
            ))}
            {publicRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={<Component/>} exact/>
            ))}
            <Route
                path="*"
                element={<Navigate to={NOTES_ROUTE} replace />}
            />
        </Routes>
    );
};

export default AppRouter;
