import Banner from "./Banner";
import Category from "./Category";
import Faq from "./FAQ";
import Footer from "./Footer";
import HappyClients from "./HappyClients";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>   
            <HappyClients></HappyClients> 
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;