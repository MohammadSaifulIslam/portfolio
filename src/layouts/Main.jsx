import { useElementSize, useMouse } from '@mantine/hooks';
import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";


const Main = () => {
    const { ref: circle, width, height } = useElementSize();
    const { ref: containerEl, x, y } = useMouse();
    const [position, setPotion] = useState({ left: -1000, top: -1000 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = () => {
        setOpacity(1)
        setPotion({
            left: x - width / 2,
            top: y - height / 2
        })
    }
    const handleMouseLeave = () => {
        setOpacity(0)
    }
    console.log(position)
    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className='w-full h-full relative overflow-hidden'
            ref={containerEl}
        >
            <Navbar />
            <ScrollRestoration />
            <Outlet />
            <div
                ref={circle}
                className='absolute bg-primary bg-opacity-80 scale-[1.5] blur-3xl w-20 h-20 rounded-full duration-300 -z-10 transition-opacity hidden md:block'
                style={{
                    top: position.top,
                    left: position.left,
                    opacity
                }}
            >
            </div>
        </div>
    );
};

export default Main;