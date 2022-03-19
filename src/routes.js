import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Register from "./pages/Register";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={ <Main/> }  />
                <Route path="/register" exact element={ < Register/> } />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;