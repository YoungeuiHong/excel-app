import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {ExcelExport, ExcelImport, LandingPage} from "./pages";

function App() {
    //
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage/>
        },
        {
            path: "/excel-export",
            element: <ExcelExport/>
        },
        {
            path: '/excel-import',
            element: <ExcelImport/>
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default App
