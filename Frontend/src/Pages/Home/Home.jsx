import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import HeroNews from '../../Component/HeroNews/HeroNews'
import HeroGoal from '../../Component/HeroGoal/HeroGoal'
import HeroCourse from '../../Component/HeroCourse/HeroCourse'
import CourseCategory from '../../Component/CourseCategory/CourseCategory'
import HeroMentors from '../../Component/HeroMentors/HeroMentors'
import HeroTestimonial from '../../Component/HeroTestimonial/HeroTestimonial'

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
    </div>
  )
}

export default Home
