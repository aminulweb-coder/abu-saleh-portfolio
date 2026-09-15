import Hero from "../Hero/Hero";
import Portfolio from "../Portfolio";
import Pricing from "../pricingPlans";
import Services from "../Services";
import SocialProof from "../SocialProof";
import Testimonials from "../Testimonials";
import Steps from "../Steps";
import Faqs from "../Faqs";  
import TeamSection from "../TeamSection";



const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <SocialProof></SocialProof>
            <Services></Services>
            <Portfolio></Portfolio>
            <Pricing></Pricing>
            <Testimonials></Testimonials>
            <Steps></Steps>
            <Faqs></Faqs>
            <teamMembers></teamMembers>
            <TeamSection></TeamSection>
        </div>
    );
};

export default Home;