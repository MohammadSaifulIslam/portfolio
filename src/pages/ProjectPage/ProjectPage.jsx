import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import project1 from '../../assets/img/projects/project1.png';
import project2 from '../../assets/img/projects/project2.png';
import project3 from '../../assets/img/projects/project3.png';
import project4 from '../../assets/img/projects/project4.png';
import project6 from '../../assets/img/projects/project6.png';
import project7 from '../../assets/img/projects/project7.png';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const ProjectPage = () => {
    return (
        <section className="py-20 bg-accent">

            <div className="my-container">
                <SectionTitle
                    subTitle={'Resume'}
                    title={'All Projects'}
                ></SectionTitle>
                <div className="mt-20 projects space-y-20">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="order-2 md:order-1 space-y-3 my-auto">
                            <p className="text-primary">Featured Projects</p>
                            <h3 className="text-white text-3xl font-bold">Artshala</h3>
                            <p className="text-neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores optio id inventore culpa deleniti aspernatur omnis praesentium aperiam tenetur iure voluptas nihil aliquam quibusdam ab, cumque qui nostrum exercitationem?</p>
                            <div className="text-primary flex gap-7">
                                <p>React</p>
                                <p>Node</p>
                                <p>Express</p>
                                <p>MongoDB</p>
                                <p>Firebase</p>
                            </div>
                            <div className="flex gap-7 mt-5">
                                <a href="#" className="text-white duration-500 hover:text-primary" target="_blank"> <BsGithub className="h-7 w-7 " /></a>
                                <a href="https://toyland-ecommerce.web.app" className="text-white duration-500 hover:text-primary" target="_blank">  <BsArrowUpRightSquare className="h-7 w-7 " /></a>
                            </div>
                        </div>
                        <div className="project1 order-1 md:order-2" style={{ backgroundImage: `url(${project4})` }}></div>

                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="project1" style={{ backgroundImage: `url(${project1})` }}></div>

                        <div className="text-right space-y-3 my-auto">
                            <p className="text-primary">Featured Projects</p>
                            <h3 className="text-white text-3xl font-bold">Toy Land</h3>
                            <p className="text-neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores optio id inventore culpa deleniti aspernatur omnis praesentium aperiam tenetur iure voluptas nihil aliquam quibusdam ab, cumque qui nostrum exercitationem?</p>
                            <div className="text-primary flex gap-7 justify-end">
                                <p>React</p>
                                <p>Tailwind</p>
                                <p>Express</p>
                                <p>MongoDB</p>
                                <p>Firebase</p>
                            </div>
                            <div className="flex justify-end gap-7 mt-5">
                                <a href="#" className="text-white duration-500 hover:text-primary" target="_blank"> <BsGithub className="h-7 w-7 " /></a>
                                <a href="https://toyland-ecommerce.web.app" className="text-white duration-500 hover:text-primary" target="_blank">  <BsArrowUpRightSquare className="h-7 w-7 " /></a>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="order-2 md:order-1 space-y-3 my-auto">
                            <p className="text-primary">Featured Projects</p>
                            <h3 className="text-white text-3xl font-bold">Chef's Magic</h3>
                            <p className="text-neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores optio id inventore culpa deleniti aspernatur omnis praesentium aperiam tenetur iure voluptas nihil aliquam quibusdam ab, cumque qui nostrum exercitationem?</p>
                            <div className="text-primary flex gap-7">
                                <p>React</p>
                                <p>Tailwind</p>
                                <p>Express</p>
                                <p>Firebase</p>
                            </div>
                            <div className="flex gap-7 mt-5">
                                <a href="#" className="text-white duration-500 hover:text-primary" target="_blank"> <BsGithub className="h-7 w-7 " /></a>
                                <a href="https://chef-magic.web.app" className="text-white duration-500 hover:text-primary" target="_blank">  <BsArrowUpRightSquare className="h-7 w-7 " /></a>
                            </div>
                        </div>
                        <div className="project1 order-1" style={{ backgroundImage: `url(${project2})` }}></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="project1" style={{ backgroundImage: `url(${project3})` }}></div>
                        <div className="text-right space-y-3 my-auto">
                            <p className="text-primary">Featured Projects</p>
                            <h3 className="text-white text-3xl font-bold">The Holy Quran</h3>
                            <p className="text-neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores optio id inventore culpa deleniti aspernatur omnis praesentium aperiam tenetur iure voluptas nihil aliquam quibusdam ab, cumque qui nostrum exercitationem?</p>
                            <div className="text-primary flex gap-7 justify-end">
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>Tailwind</p>
                                <p>REST APIs</p>
                            </div>
                            <div className="flex justify-end gap-7 mt-5">
                                <a href="#" className="text-white duration-500 hover:text-primary" target="_blank"> <BsGithub className="h-7 w-7 " /></a>
                                <a href="https://the-holy-quran-majid.netlify.app" className="text-white duration-500 hover:text-primary" target="_blank">  <BsArrowUpRightSquare className="h-7 w-7 " /></a>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="order-2 md:order-1 space-y-3 my-auto">
                            <p className="text-primary">Featured Projects</p>
                            <h3 className="text-white text-3xl font-bold">HeroGadget</h3>
                            <p className="text-neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores optio id inventore culpa deleniti aspernatur omnis praesentium aperiam tenetur iure voluptas nihil aliquam quibusdam ab, cumque qui nostrum exercitationem?</p>
                            <div className="text-primary flex gap-7">
                                <p>React</p>
                                <p>Tailwind</p>
                                <p>Apis</p>
                                <p>Localstorage</p>
                            </div>
                            <div className="flex gap-7 mt-5">
                                <a href="https://github.com/MohammadSaifulIslam/hero-gadget" className="text-white duration-500 hover:text-primary" target="_blank"> <BsGithub className="h-7 w-7 " /></a>
                                <a href="https://herogadget.netlify.app/" className="text-white duration-500 hover:text-primary" target="_blank">  <BsArrowUpRightSquare className="h-7 w-7 " /></a>
                            </div>
                        </div>
                        <div className="project1 order-1" style={{ backgroundImage: `url(${project6})` }}></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="project1" style={{ backgroundImage: `url(${project7})` }}></div>
                        <div className="text-right space-y-3 my-auto">
                            <p className="text-primary">Featured Projects</p>
                            <h3 className="text-white text-3xl font-bold">Tempo</h3>
                            <p className="text-neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores optio id inventore culpa deleniti aspernatur omnis praesentium aperiam tenetur iure voluptas nihil aliquam quibusdam ab, cumque qui nostrum exercitationem?</p>
                            <div className="text-primary flex gap-7 justify-end">
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>Bootstrap</p>
                                <p>JQuery</p>
                            </div>
                            <div className="flex justify-end gap-7 mt-5">
                                <a href="https://github.com/MohammadSaifulIslam/Tempo" className="text-white duration-500 hover:text-primary" target="_blank"> <BsGithub className="h-7 w-7 " /></a>
                                <a href="https://tempo-portfolio.netlify.app" className="text-white duration-500 hover:text-primary" target="_blank">  <BsArrowUpRightSquare className="h-7 w-7 " /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ProjectPage;