
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Test from "../pages/Test";
import jobRouter from "./jobRouter";
import deptInfoRouter from "./deptInfoRouter";
import roomListRouter from "./roomListRouter";
import bookingRouter from "./bookingRouter";
import dayOffRouter from "./dayOffRouter";
import employeesRouter from "./employeesRouter";
import reportRouter from "./reportRouter";

const root = createBrowserRouter([
    {
        path : '',
        elememt : <MainPage/>
    },
    {
        path : 'test',
        element: <Test/>
    },
    {
        path : 'job',
        children : jobRouter()
    },
    {
        path : 'deptinfo',
        children : deptInfoRouter()
    },
    {
        path : 'room',
        children : roomListRouter()
    },
    {
        path : 'booking',
        children : bookingRouter()
    },
    {
        path : 'dayoff',
        children : dayOffRouter()
    },
    {
        path : 'employees',
        children : employeesRouter()
    },
    {
        path : 'report',
        children : reportRouter()
    }
])

export default root;