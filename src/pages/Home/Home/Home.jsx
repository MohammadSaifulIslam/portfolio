import About from "../../About/About";
import Blog from "../../Blog/Blog";
import Contact from "../../Contact/Contact";
import Projects from "../../Projects/Projects";
import Skill from "../../Skill/Skill";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Skill/>
            <Projects/>
            <Blog/>
            <Contact/>
        </div>
    );
};

export default Home;