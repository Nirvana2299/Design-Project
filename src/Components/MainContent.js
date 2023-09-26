import './../App.css'
import ProjectSection from '../Section/ProjectSection'
import TestimonialSection from '../Section/TestimonialSection'
import Brand from '../Section/BrandSection'
import BlogNewsSection from '../Section/BlogNewsSection'
import SupportSection from '../Section/SupportSection'
import ServiceSection from '../Section/ServiceSection'
import TeamSection from '../Section/TeamSection'
import HeroSection from '../Section/HeroSection'

function MainContent() {
    return (
        <main>
            <HeroSection />
            <TeamSection />
            <ServiceSection />
            <ProjectSection />
            <TestimonialSection />
            <Brand />
            <BlogNewsSection />
            <SupportSection />
        </main>


    )
}

export default MainContent;