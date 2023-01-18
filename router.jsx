import { createBrowserRouter } from 'react-router-dom';
import Result from './snapshot/Result';
import Signin from './snapshot/Signin';
import Signup from './snapshot/Signup';
import Snapshot from './snapshot/Snapshot';
import Abc from './extra/Abc';
import Card from './extra/Card';
import Data from './extra/Data';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Snapshot />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/signin",
        element: <Signin />,
    },
    {
        path: "/result",
        element: <Result />,
    },
    {
        path: '/abc',
        element: <Abc />,
    },
    {
        path: '/card',
        element: <Card />,
    },
    {
        path: '/data',
        element: <Data />,
    }
]);

export default router;