import React, { useContext, useState } from 'react'
import Card from './shared/Card'
import  {FaTimes , FaEdit} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({item }) => {

  const {deleteFeedback,editFeedback} =useContext(FeedbackContext)

    // const  handleClick = (id)=>{
    //     console.log(id);

    // }
  return (
    <Card 
    // reverse={true}
     >
        <div className="num-display">{item.rating}</div>
        <button className='close' onClick={ () => deleteFeedback(item.id) }><FaTimes color='purple' /></button>
        <button className='edit' onClick={ ()=> editFeedback(item)}>
          <FaEdit color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem