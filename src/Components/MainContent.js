import './../App.css'
import { lazy } from 'react'
// import ProjectSection from '../Section/ProjectSection'
// import TestimonialSection from '../Section/TestimonialSection'
// import Brand from '../Section/BrandSection'
// import BlogNewsSection from '../Section/BlogNewsSection'
// import SupportSection from '../Section/SupportSection'
// import ServiceSection from '../Section/ServiceSection'
// import TeamSection from '../Section/TeamSection'
// import HeroSection from '../Section/HeroSection'

const ProjectSection = lazy(() => import('../Section/ProjectSection'))
const TestimonialSection = lazy(() => import('../Section/TestimonialSection'))
const Brand = lazy(() => import('../Section/BrandSection'))
const BlogNewsSection = lazy(() => import('../Section/BlogNewsSection'))
const SupportSection = lazy(() => import('../Section/SupportSection'))
const ServiceSection = lazy(() => import('../Section/ServiceSection'))
const TeamSection = lazy(() => import('../Section/TeamSection'))
const HeroSection = lazy(() => import('../Section/HeroSection'))

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