import { AiFillPicture } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
// import project3 from '../../assets/img/projects/project3.png';
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const Projects = () => {
    return (
        <Element name="project">
            <section  className="py-20 bg-accent overflow-hidden">

                <div className="my-container">
                    <SectionTitle
                        subTitle={'Projects'}
                        title={'Latest Work'}
                    ></SectionTitle>
                    {/* react timeline  */}
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#1c252b", }}
                            contentArrowStyle={{ borderRight: '7px solid  #26dca6' }}
                            iconStyle={{ background: '#26dca6', color: '#fff' }}
                            icon={<AiFillPicture />}
                        >
                            <div className="project1 h-80" style={{ backgroundImage: `url(https://i.ibb.co/NSFnzsc/electra-Poll.png)` }}></div>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#1c252b", }}
                            contentArrowStyle={{ borderRight: '7px solid  #26dca6' }}
                            iconStyle={{ background: '#26dca6', color: '#fff' }}
                            icon={<BiMessageDetail />}
                        >
                            <div className="order-2 md:order-1 space-y-3 my-auto">
                                <p className="text-primary">Featured Projects</p>
                                <h3 className="text-white text-3xl font-bold">ElectraPoll</h3>
                                <p className="text-neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores optio id inventore culpa deleniti aspernatur omnis praesentium aperiam tenetur iure voluptas nihil aliquam quibusdam ab, cumque qui nostrum exercitationem?</p>
                                <div className="text-primary flex gap-7">
                                    <p>React</p>
                                    <p>Redux</p>
                                    <p>Express</p>
                                    <p>MongoDB</p>
                                </div>
                                <div className="flex gap-7 mt-5">
                                    <a href="https://github.com/saiful674/electra-poll" className="text-white duration-500 hover:text-primary" target="_blank"> <BsGithub className="h-7 w-7 " /></a>
                                    <a href="https://electrapoll-64bc7.web.app" className="text-white duration-500 hover:text-primary" target="_blank">  <BsArrowUpRightSquare className="h-7 w-7 " /></a>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#1c252b", }}
                            contentArrowStyle={{ borderRight: '7px solid  #26dca6' }}
                            iconStyle={{ background: '#26dca6', color: '#fff' }}
                            icon={<AiFillPicture />}
                        >
                            <div className="project1 h-80" style={{ backgroundImage: `url(https://i.ibb.co/S700z2N/project4.png)` }}></div>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#1c252b", }}
                            contentArrowStyle={{ borderRight: '7px solid  #26dca6' }}
                            iconStyle={{ background: '#26dca6', color: '#fff' }}
                            icon={<BiMessageDetail />}
                        >
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
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#1c252b", }}
                            contentArrowStyle={{ borderRight: '7px solid  #26dca6' }}
                            iconStyle={{ background: '#26dca6', color: '#fff' }}
                            icon={<AiFillPicture />}
                        >
                            <div className="project1 h-80" style={{ backgroundImage: `url(https://i.ibb.co/bPPN4VL/project1.png)` }}></div>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#1c252b", }}
                            contentArrowStyle={{ borderRight: '7px solid  #26dca6' }}
                            iconStyle={{ background: '#26dca6', color: '#fff' }}
                            icon={<BiMessageDetail />}
                        >
                            <div className="space-y-3">
                                <p className="text-primary">Featured Projects</p>
                                <h3 className="text-white text-3xl font-bold">Toy Land</h3>
                                <p className="text-neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores optio id inventore culpa deleniti aspernatur omnis praesentium aperiam tenetur iure voluptas nihil aliquam quibusdam ab, cumque qui nostrum exercitationem?</p>
                                <div className="text-primary flex gap-7">
                                    <p>React</p>
                                    <p>Tailwind</p>
                                    <p>Express</p>
                                    <p>MongoDB</p>
                                </div>
                                <div className="flex gap-7 mt-5">
                                    <a href="https://github.com/saiful674/toyland" className="text-white duration-500 hover:text-primary" target="_blank"> <BsGithub className="h-7 w-7 " /></a>
                                    <a href="https://toyland-ecommerce.web.app" className="text-white duration-500 hover:text-primary" target="_blank">  <BsArrowUpRightSquare className="h-7 w-7 " /></a>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                    <div className="mt-20 text-center">
                        <Link to={'/projects'}><button className="my-btn">See All Projects</button></Link>
                    </div>
                </div>
            </section >
        </Element>
    );
};

export default Projects;