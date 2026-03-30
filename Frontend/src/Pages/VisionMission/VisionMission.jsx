import React from 'react'
import VOMInspSection from '../../Component/VOMInspSection/VOMInspSection'
import VOMCourse from '../../Component/VOMCourse/VOMCourse'
import VOMService from '../../Component/VOMService/VOMService'
import VOMEnroll from '../../Component/VOMEnroll/VOMEnroll'
import VOMWhyChoose from '../../Component/VOMWhyChoose/VOMWhyChoose'
import VOMFaq from '../../Component/VOMFaq/VOMFaq'
import VMBreadcrum from '../../Component/VMBreadcrum/VMBreadcrum'

const VisionMission = () => {
  return (
    <div>
        <VMBreadcrum/>
        <VOMInspSection/>
        <VOMCourse/>
        <VOMService/>
        <VOMEnroll/>
        <VOMWhyChoose/>
        <VOMFaq/>
      
    </div>
  )
}

export default VisionMission
