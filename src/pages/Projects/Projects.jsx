import { AiFillPicture } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import project1 from '../../assets/img/projects/project1.png';
import project4 from '../../assets/img/projects/project4.png';
// import project3 from '../../assets/img/projects/project3.png';
import { Link } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const Projects = () => {
    return (
        <section className="py-20 bg-accent">

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
                        icon={<AiFillPicture/>}
                    >
                        <div className="project1" style={{ backgroundImage: `url(${project4})` }}></div>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#1c252b", }}
                        contentArrowStyle={{ borderRight: '7px solid  #26dca6' }}
                        iconStyle={{ background: '#26dca6', color: '#fff' }}
                          icon={<BiMessageDetail/>}
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
                                <p>Firebase</p>
                            </div>
                            <div className="flex gap-7 mt-5">
                                <a href="#" className="text-white duration-500 hover:text-primary" target="_blank"> <BsGithub className="h-7 w-7 " /></a>
                                <a href="https://toyland-ecommerce.web.app" className="text-white duration-500 hover:text-primary" target="_blank">  <BsArrowUpRightSquare className="h-7 w-7 " /></a>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#1c252b", }}
                        contentArrowStyle={{ borderRight: '7px solid  #26dca6' }}
                        iconStyle={{ background: '#26dca6', color: '#fff' }}
                        icon={<AiFillPicture/>}
                    >
                        <div className="project1" style={{ backgroundImage: `url(${project1})` }}></div>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#1c252b", }}
                        contentArrowStyle={{ borderRight: '7px solid  #26dca6' }}
                        iconStyle={{ background: '#26dca6', color: '#fff' }}
                        icon={<BiMessageDetail/>}
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
                                <p>Firebase</p>
                            </div>
                            <div className="flex gap-7 mt-5">
                                <a href="#" className="text-white duration-500 hover:text-primary" target="_blank"> <BsGithub className="h-7 w-7 " /></a>
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
    );
};

export default Projects;