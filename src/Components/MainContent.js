import './../App.css'

import PricingSection from '../Section/PricinngSection'
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
            <PricingSection />
            <ProjectSection />
            <TestimonialSection />
            <Brand />
            <BlogNewsSection />
            <SupportSection />
        </main>


    )
}

export default MainContent;