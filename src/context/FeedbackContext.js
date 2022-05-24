import {  createContext ,useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext =createContext()
export const FeedbackProvider =({children})=>{
    const [feedback,setFeedback] =useState ([
        {
            id:1,
            text:'Item from context',
            rating:10,
        },
        {
            id:2,
            text:'Item from context',
            rating:8,
        },
        {
            id:3,
            text:'Item from context',
            rating:9,
        },
    ])

    const [feedbackEdit,setFeedbackEdit] = useState({

        item:{},
        edit:false,
    })

    //Add Delete
    const deleteFeedback =(id)=>{
        if(window.confirm('Are you sure you want delete')){
          setFeedback(feedback.filter((item)=>item.id !==id))
        }
      }

      //Add feedback
      const addFeedback =(newFeedback)=>{
        newFeedback.id=uuidv4()
        setFeedback([newFeedback, ...feedback])
    
      }
     
      //Add Feedback
     const editFeedback = (item)=>{
         setFeedbackEdit({
             item,edit:true
         })
     } 

     //update feedback item
     const updateFeedback = (id ,updItem)=>{
         setFeedback(feedback.map((item)=>item.id === id ? {...item,...updItem}:item))
     }
      
    return(
        <FeedbackContext.Provider 

        value={{
            feedback, 
            deleteFeedback,
            addFeedback, 
            editFeedback,
            feedbackEdit,
            updateFeedback
        }}>
        {children}
    </FeedbackContext.Provider>
        )
} 

export default FeedbackContext