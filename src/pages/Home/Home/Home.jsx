import About from "../../About/About";
import Blog from "../../Blog/Blog";
import Contact from "../../Contact/Contact";
import Projects from "../../Projects/Projects";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Projects/>
            <Blog/>
            <Contact/>
        </div>
    );
};

export default Home;