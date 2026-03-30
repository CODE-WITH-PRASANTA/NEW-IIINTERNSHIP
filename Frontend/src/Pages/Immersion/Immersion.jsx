import React from 'react'
import EduHeroSection from '../../Component/EduHeroSection/EduHeroSection'
import IMMcourse from '../../Component/IMMcourse/IMMcourse'
import IMMcatagory from '../../Component/IMMcatagory/IMMcatagory'
import IMMsection from '../../Component/IMMsection/IMMsection'
import IMMcreative from '../../Component/IMMcreative/IMMcreative'
import ImmersionBD from '../../Component/ImmersionBD/ImmersionBD'

const Immersion = () => {
  return (
    <div>
        <ImmersionBD/>
        <EduHeroSection/>
        <IMMcourse/>
        <IMMcatagory/>
        <IMMsection/>
        <IMMcreative/>
      
    </div>
  )
}

export default Immersion
