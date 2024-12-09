import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Feature from "@/sections/Feature";
import Faq from "@/sections/faq";
import Intro from "@/sections/Introduction";
import Cta from "@/sections/CallToAction";
import Footer from "@/sections/Footer";


export default function Home() {
    return(
        <>
            {/* <Grid /> */}
            <Navbar />
            <Hero />
            <Intro/>
            <Cta />     
            <Feature />
            <Faq />     
            <Footer />
             
            

        </>
    );
}
