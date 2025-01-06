
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Test from "../pages/Test";
import jobRouter from "./jobRouter";
import deptInfoRouter from "./deptInfoRouter";
import roomListRouter from "./roomListRouter";
import bookingRouter from "./bookingRouter";

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
    }
])

export default root;