import {  createContext ,useEffect,useState } from "react";

const FeedbackContext =createContext()




export const FeedbackProvider =({children})=>{
    const [isLoading , setIsLoading] =useState(true)
    const [feedback,setFeedback] =useState ([])
    useEffect(()=>{
        fetchFeedback()
    },[]) 

    const fetchFeedback =async ()=>{
        const res = await fetch(`/feedback?_sort=id&_order=desc`)
        const data =await res.json()
        setFeedback(data)
        setIsLoading(false)

    }

    const [feedbackEdit,setFeedbackEdit] = useState({

        item:{},
        edit:false,
    })

    //Add Delete
    const deleteFeedback = async(id)=>{
        if(window.confirm('Are you sure you want delete')){

            await fetch(`/feedback/${id}`,{ method:'DELETE'})
          setFeedback(feedback.filter((item)=>item.id !==id))
        }
      }

      //Add feedback
      const addFeedback = async (newFeedback)=>{
          const res = await fetch('/feedback' , {
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(newFeedback),
            })
            const data = await res.json()
            setFeedback([data, ...feedback])
        }
    
 
     
      //Add Feedback
     const editFeedback = (item)=>{
         setFeedbackEdit({
             item,edit:true
         })
     } 

     //update feedback item
     const updateFeedback = async(id ,updItem)=>{

        const res = await fetch(`/feedback/${id}` , {
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(updItem),
          })
          const data = await res.json()
         setFeedback(feedback.map((item)=>item.id === id ? {...item,...data}:item))
     }
      
    return(
        <FeedbackContext.Provider 

        value={{
            isLoading,
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