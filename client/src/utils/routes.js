import {LOGIN_ROUTE, REGISTRATION_ROUTE, USER_ROUTE, NOTES_ROUTE} from './consts'
import AuthPage from "../pages/AuthPage";
import UserPage from "../pages/UserPage";
import NotesPage from "../pages/NotesPage";

export const authRoutes = [
    {
        path: USER_ROUTE,
        Component: UserPage,
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: AuthPage,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthPage,
    },
    {
        path: NOTES_ROUTE,
        Component: NotesPage
    },
]
