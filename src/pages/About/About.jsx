import { FaCode } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import profile from '../../assets/img/profile.jpg';
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const About = () => {
    return (
        <section className="py-20 bg-accent">
            <div className="my-container">
                <SectionTitle
                    title={'Who am i'}
                    subTitle={'About me'}
                ></SectionTitle>
                <div className="mt-10 grid md:grid-cols-2 gap-10">
                    <div className="text-neutral my-auto">
                        <div className="space-y-3">
                            <p>I was also looking for that, who am I really? After a lot of hard work, I found myself as a web developer in 2023.</p>
                            <p>By learning new technologies, I like to develop my skills. I love to bias in action with a passion for provlem solving.</p>
                        </div>
                        <div className='my-shadow p-10 mt-10 '>
                            <div className='grid md:grid-cols-2 md:gap-5'>
                                <div className='space-y-1'>
                                    <p className="flex gap-3"><HiOutlineMail className='w-5 h-5 text-primary' /> saiful37471@gmail.com</p>
                                    <p className="flex gap-3"><HiOutlinePhone className='w-5 h-5 text-primary' /> ++8801875924990</p>

                                </div>
                                <div className='space-y-1'>
                                    <p className="flex gap-3"><FaCode className='w-5 h-5 text-primary' /> Coding</p>
                                    <p className="flex gap-3"><HiOutlineLocationMarker className='w-5 h-5 text-primary' /> Dhaka,Bangladesh</p>
                                </div>
                            </div>
                            <button className='my-btn mt-5'>Resume</button>
                        </div>
                    </div>
                    <div className='mx-auto md:mx-0 md:ml-auto'>
                        <img src={profile} alt="profile image" className='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;