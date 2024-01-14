import TagCloud from 'TagCloud';
import { useEffect } from 'react';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const Skill = () => {
    useEffect(() => {
        const container = '.tagcloud';
        const texts = [
            'HTML', 'CSS', 'JavaScript',
            'Tailwind', 'ES6', 'Communication', 'Team Player', 'React',
            'Node', 'Express', 'MongoDB',
            'Firebase', 'Animation', 'CRUD Operation', 'Bootstrap', 'Github', 'ChatGPT', 'Netlify', 'Vercel', 'Figma', 'Canva', 'VS Code'
        ];
        const options = {
            radius: 200,
        };
        TagCloud(container, texts, options);
    })
    return (
        <section id='skill' className='py-20 bg-secondary'>
            <div className="my-container">
                <SectionTitle
                    subTitle={'Resume'}
                    title={'My Skills'}
                ></SectionTitle>

                <div className="mt-20 grid md:grid-cols-2 gap-5 text-white">
                  <div className='overflow-x-hidden'>
                  <div className="tagcloud text-primary mx-auto md:mx-0 "> </div>
                  </div>
                    <div className='text-neutral'>
                        <p><span className='text-primary'>My Tech stack is MERN.</span> I am continuously developing my skills by learning new technologies. I am confident that my skills and experience make me a valuable asset to any team. I am eager to learn new things and am always looking for new challenges.</p>

                        <p className='mt-4'>Here is a list of technologies that I use for my work</p>
                        <div className='mt-5 flex gap-5 justify-around overflow-x-hidden'>
                            <ul className='list-disc text-primary'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Boostrap</li>
                                <li>Tailwind</li>
                                <li>FireBase</li>
                                <li>Git</li>
                                <li>Figma</li>
                                <li>Netlify</li>
                            </ul>
                            <ul className='list-disc text-primary'>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Express</li>
                                <li>Node</li>
                                <li>MongoDB</li>
                                <li>Vercel</li>
                                <li>ChatGPT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Skill;