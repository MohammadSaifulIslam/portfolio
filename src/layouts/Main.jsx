import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";


const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate a delay for demonstration purposes (you can replace this with your actual loading logic)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simulating a 3-second loading time
    }, []);

    if(isLoading){
        return <Loading/>
    }
    return (
        <div className="relative">
            <Navbar />
            <ScrollRestoration />
            <div className="">
                <Outlet />
            </div>
            <Footer />
            <Toaster />
        </div>
    );
};

export default Main;