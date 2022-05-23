import React from 'react'

const Card = ({children , reverse}) => {
  return (
      //conditional class using boolean 

    // <div className={`card ${reverse && "reverse"}`}>
    //     {children}
    // </div>

    <div className="card" 
    style={{backgroundColor: reverse ? 'rgba(0,0,0,0.4)':'#fff' , 
    color : reverse ? '#fff' : '#000'
    }}>
     {children}
    </div>
    
  )
}

Card.defaultProps ={
    reverse :false,
}

export default Card