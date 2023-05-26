import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar />
            <ScrollRestoration />
            <Outlet />
        </div>
    );
};

export default Main;