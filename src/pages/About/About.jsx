import AOS from 'aos';
import 'aos/dist/aos.css';
import { saveAs } from 'file-saver';
import { useEffect } from "react";
import { BiDownload } from 'react-icons/bi';
import { FaGithubAlt } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { Element } from 'react-scroll';
import resumePdf from '../../../public/resume/Md Saiful Islam_MERN Stack Developer.pdf';
import profile from '../../assets/img/profile.jpg';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const About = () => {
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
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    })
    return (
      <Element name='about'>
          <section className="py-20 bg-accent overflow-hidden">
            <div className="my-container">
                <SectionTitle
                    title={'Who am i'}
                    subTitle={'About me'}
                ></SectionTitle>
                <div className="mt-10 grid md:grid-cols-2 gap-10">
                    <div data-aos="fade-up" data-aos-once={true} className="order-2 md:order-1 text-neutral my-auto">
                        <div className="space-y-3">
                            <p>I was also looking for that, who am I really? After a lot of hard work, I found myself as a web developer in 2023.</p>
                            <p>By learning new technologies, I like to develop my skills. I like to bias in action, and I have a passion for provlem solving.</p>
                        </div>
                        <div className='my-shadow p-10 mt-10'>
                            <div className='grid'>
                                <div className='space-y-1'>
                                    <p className="flex gap-3"><HiOutlineMail className='w-5 h-5 text-primary' /> saifulmdislam567@gmail.com</p>
                                    <p className="flex gap-3"><HiOutlinePhone className='w-5 h-5 text-primary' />+8801875924990</p>
                                </div>
                                <div className='space-y-1'>
                                    <a href='https://www.linkedin.com/in/saiful6741' className="flex gap-3 w-fit" target='_blank'><FiLinkedin className='w-5 h-5 text-primary' />Linkedin</a>
                                    <a href='https://github.com/MohammadSaifulIslam' className="flex gap-3 w-fit" target='_blank'><FaGithubAlt className='w-5 h-5 text-primary' />Github</a>
                                    <p className="flex gap-3"><HiOutlineLocationMarker className='w-5 h-5 text-primary' /> Dhaka,Bangladesh</p>
                                </div>
                            </div>
                            <button className="my-btn flex gap-2 items-center mt-5" onClick={handleDownload}><BiDownload className='h-5 w-5 ' /> Resume</button>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-once={true} className='order-1 md:order-2 mx-auto md:mx-0 md:ml-auto'>
                        <img src={profile} alt="profile image" className='' />
                    </div>
                </div>
            </div>
        </section>
      </Element>
    );
};

export default About;