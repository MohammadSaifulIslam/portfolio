import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
import { Link, ScrollRestoration } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const ProjectPage = () => {
    return (
        <section className="py-20 bg-accent">
            <ScrollRestoration />
            <div className="my-container border-2 border-primary mb-10 p-5 bg-secondary flex items-center gap-2 text-sm font-semibold uppercase">
                <Link to={'/'} className="text-white hover:text-primary duration-300">Home</Link>
                <FaGreaterThan className="text-white" />
                <Link to={'/projects'} className="text-primary hover:text-white duration-300">Projects</Link>

            </div>
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
                            </div>
                            <div className="flex gap-7 mt-5">
                                <a href="https://github.com/saiful674/artshala-client" className="text-white duration-500 hover:text-primary" target="_blank"> <BsGithub className="h-7 w-7 " /></a>
                                <a href="https://artshala-school.web.app" className="text-white duration-500 hover:text-primary" target="_blank">  <BsArrowUpRightSquare className="h-7 w-7 " /></a>
                            </div>
                        </div>
                        <div className="project1 h-80 order-1 md:order-2" style={{ backgroundImage: `url(https://i.ibb.co/S700z2N/project4.png)` }}></div>

                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="project1 h-80" style={{ backgroundImage: `url(https://i.ibb.co/bPPN4VL/project1.png)` }}></div>

                        <div className="text-right space-y-3 my-auto">
                            <p className="text-primary">Featured Projects</p>
                            <h3 className="text-white text-3xl font-bold">Toy Land</h3>
                            <p className="text-neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores optio id inventore culpa deleniti aspernatur omnis praesentium aperiam tenetur iure voluptas nihil aliquam quibusdam ab, cumque qui nostrum exercitationem?</p>
                            <div className="text-primary flex gap-7 justify-end">
                                <p>React</p>
                                <p>Tailwind</p>
                                <p>Express</p>
                                <p>MongoDB</p>
                            </div>
                            <div className="flex justify-end gap-7 mt-5">
                                <a href="https://github.com/saiful674/toyland" className="text-white duration-500 hover:text-primary" target="_blank"> <BsGithub className="h-7 w-7 " /></a>
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
                                <a href="https://github.com/saiful674/chef-magic" className="text-white duration-500 hover:text-primary" target="_blank"> <BsGithub className="h-7 w-7 " /></a>
                                <a href="https://chef-magic.web.app" className="text-white duration-500 hover:text-primary" target="_blank">  <BsArrowUpRightSquare className="h-7 w-7 " /></a>
                            </div>
                        </div>
                        <div className="project1 h-80 order-1" style={{ backgroundImage: `url(https://i.ibb.co/vHVY0sf/project2.png)` }}></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="project1 h-80" style={{ backgroundImage: `url(https://i.ibb.co/BcBq7Zq/project3.png)` }}></div>
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
                                <a href="https://github.com/saiful674/the-holy-Quran" className="text-white duration-500 hover:text-primary" target="_blank"> <BsGithub className="h-7 w-7 " /></a>
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
                                <a href="https://github.com/saiful674/hero-gadget" className="text-white duration-500 hover:text-primary" target="_blank"> <BsGithub className="h-7 w-7 " /></a>
                                <a href="https://herogadget.netlify.app/" className="text-white duration-500 hover:text-primary" target="_blank">  <BsArrowUpRightSquare className="h-7 w-7 " /></a>
                            </div>
                        </div>
                        <div className="project1 h-80 order-1" style={{ backgroundImage: `url(https://i.ibb.co/qn7p0Wr/project6.png)` }}></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="project1 h-80" style={{ backgroundImage: `url(https://i.ibb.co/FDrDfx8/project7.png)` }}></div>
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
                                <a href="https://github.com/saiful674/Tempo" className="text-white duration-500 hover:text-primary" target="_blank"> <BsGithub className="h-7 w-7 " /></a>
                                <a href="https://tempo-portfolio.netlify.app" className="text-white duration-500 hover:text-primary" target="_blank">  <BsArrowUpRightSquare className="h-7 w-7 " /></a>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-3 my-auto">
                            <p className="text-primary">Featured Projects</p>
                            <h3 className="text-white text-3xl font-bold">ElectraPoll</h3>
                            <p className="text-neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores optio id inventore culpa deleniti aspernatur omnis praesentium aperiam tenetur iure voluptas nihil aliquam quibusdam ab, cumque qui nostrum exercitationem?</p>
                            <div className="text-primary flex gap-7">
                                <p>Team Project</p>
                                <p>React</p>
                                <p>Redux</p>
                                <p>Express</p>
                                <p>MongoDB</p>
                            </div>
                            <div className="flex gap-7 mt-5">
                                <a href="https://github.com/saiful674/Tempo" className="text-white duration-500 hover:text-primary" target="_blank"> <BsGithub className="h-7 w-7 " /></a>
                                <a href="https://tempo-portfolio.netlify.app" className="text-white duration-500 hover:text-primary" target="_blank">  <BsArrowUpRightSquare className="h-7 w-7 " /></a>
                            </div>
                        </div>
                        <div className="project1 h-80" style={{ backgroundImage: `url(https://i.ibb.co/NSFnzsc/electra-Poll.png)` }}></div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ProjectPage;