import Home from "../components/main/Home/Home";
import Recipes from "../components/main/Recipes/Recipes";
import Services from "../components/main/Services/Services";
import Blog from "../components/main/Blog/Blog";
import Membership from "../components/main/Membership/Membership";
import { Layout } from "../components/main/Layout";

const Main = () => {
    return (
        <Layout>
            <>
                <Home />
                <Recipes />
                <Services />
                <Blog />
                <Membership />
            </>
        </Layout>
    );
};

export default Main;
