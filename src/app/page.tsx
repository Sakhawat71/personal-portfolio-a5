import Banner from "@/components/Banner/Banner";
import Skills from "@/components/Skills/Skills";
import HomeProjects from '@/components/HomeProjects/HomeProjects';


const HomePage = () => {

    return (
        <div className="bg-[#D7D7D7]">
            <Banner />
            <Skills />
            <HomeProjects />
        </div>
    );
};

export default HomePage;