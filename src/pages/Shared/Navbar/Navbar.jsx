import { saveAs } from 'file-saver';
import { useEffect, useState } from 'react';
import { BiDownload } from "react-icons/bi";

import { Events, Link, scrollSpy } from 'react-scroll';
import resumePdf from '../../../../public/resume/Md Saiful Islam_MERN Stack Developer.pdf';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('banner');
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleDownload = () => {
        fetch(resumePdf)
            .then((response) => response.blob())
            .then((blob) => {
                // Use the saveAs function to download the file
                saveAs(blob, 'Md. Saiful Islam.pdf');
            })
            .catch((error) => {
                console.error('Error downloading the file:', error);
            });
    };


    useEffect(() => {
        // Register scroll events for scrollSpy
        Events.scrollEvent.register('begin', (to, element) => {
            setActiveSection(element.id);
        });

        // Initialize scrollSpy
        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
        };
    }, []);

    const sections = [
        { id: 'banner', text: 'Home' },
        { id: 'about', text: 'About' },
        { id: 'skill', text: 'Skill' },
        { id: 'project', text: 'Project' },
        { id: 'blog', text: 'Blog' },
        { id: 'contact', text: 'Contact' },
    ];



    return (
        <section className="bg-accent text-white py-4 sticky top-0 z-50 shadow-xl uppercase border-b-2 border-primary">
            <nav className="px-5 max-w-7xl mx-auto navbar ">
                <div className="w-full flex justify-between">
                    <Link to='/' className="text-2xl text-primary font-semibold">Saif</Link>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="hover:text-primary focus:outline-none focus:text-primary duration-300">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className={`md:hidden ${isOpen ? ' translate-x-0' : ' translate-x-full'} fixed top-0 right-0 h-full bg-secondary w-64 transform transition-all duration-500 ease-in-out font-medium uppercase shadow-lg`}>
                        <div className="px-4 py-8 text-center space-y-4">
                            <button onClick={toggleMenu} className="text-white hover:text-red-500 focus:outline-none absolute top-4 right-4 duration-300">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            {sections.map(({ id, text }) => (
                                <Link
                                    key={id}
                                    onClick={toggleMenu}
                                    className={`cursor-pointer  block duration-300 py-1 ${activeSection === id ? 'text-white bg-primary' : 'hover:bg-primary'}`}
                                    to={id}
                                    smooth={true}
                                    duration={800}
                                    offset={-80}
                                >
                                    {text}
                                </Link>
                            ))}
                            <button className="mx-auto my-btn flex gap-2 items-center" onClick={handleDownload}><BiDownload className='h-5 w-5 ' /> Resume</button>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-6 font-medium">
                        {sections.map(({ id, text }) => (
                            <li key={id}
                                onClick={toggleMenu}>
                                <Link
                                    className={`cursor-pointer block duration-300 ${activeSection === id ? 'text-primary' : 'hover:text-primary'}`}
                                    to={id}
                                    smooth={true}
                                    duration={800}
                                    offset={-80}
                                >
                                    {text}
                                </Link>
                            </li>


                        ))}
                        <li><button className="my-btn flex gap-2 items-center" onClick={handleDownload}><BiDownload className='h-5 w-5 ' /> Resume</button></li>
                    </ul>
                </div>
                <a href="" className={({ isActive }) =>isActive ? "text-[#FFB347]" : ''}></a>
            </nav>
        </section>
    );
};

export default Navbar;