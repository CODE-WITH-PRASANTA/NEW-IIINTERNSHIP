import React from 'react'
import SuccessHero from '../../Component/SuccessHero/SuccessHero'
import DetailsContent from '../../Component/DetailsContent/DetailsContent'
import SuccessDetailsreply from '../../Component/SuccessDetailsreply/SuccessDetailsreply'
import LeaveComment from '../../Component/LeaveComment/LeaveComment'

const SuccessStoryDetails = () => {
  return (
    <div>
        <SuccessHero/>
        <DetailsContent/>
        <SuccessDetailsreply/>
        <LeaveComment/>
    </div>
  )
}

export default SuccessStoryDetails