import React from 'react'
import StepsTimeline from '../../Component/StepsTimeline/StepsTimeline'
import HelpSection from '../../Component/HelpSection/HelpSection'
import ICan from '../../Component/ICan/ICan'
import HowItWorks from '../../Component/HowItWorks/HowItWorks'
import CanNewsLetter from '../../Component/CanNewsLetter/CanNewsLetter'
import InternshipBD from '../../Component/InternshipBD/InternshipBD'

const Internship = () => {
  return (
    <div>
      <InternshipBD/>
      <StepsTimeline/>
      <HelpSection/>
      <ICan/>
      <HowItWorks/>
      <CanNewsLetter/>

    </div>
  )
}

export default Internship
