import About from "../../About/About";
import Blog from "../../Blog/Blog";
import Projects from "../../Projects/Projects";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Projects/>
            <Blog/>
        </div>
    );
};

export default Home;