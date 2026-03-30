import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import HeroNews from '../../Component/HeroNews/HeroNews'
import HeroGoal from '../../Component/HeroGoal/HeroGoal'
import HeroCourse from '../../Component/HeroCourse/HeroCourse'
import CourseCategory from '../../Component/CourseCategory/CourseCategory'
import HeroMentors from '../../Component/HeroMentors/HeroMentors'
import HeroTestimonial from '../../Component/HeroTestimonial/HeroTestimonial'
import FreeWorkshop from '../../Component/FreeWorkshop/FreeWorkshop'
import WhyStudent from '../../Component/WhyStudent/WhyStudent'
import LearningPartner from '../../Component/LearningPartner/LearningPartner'
import Gallery from '../../Component/Gallery/Gallery'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HeroNews />
      <HeroGoal />
      <HeroCourse />
      <CourseCategory/>
      <HeroMentors />
      <HeroTestimonial />
      <FreeWorkshop/>
      <WhyStudent/>
      <LearningPartner/>
      <Gallery/>
    </div>
  )
}

export default Home
