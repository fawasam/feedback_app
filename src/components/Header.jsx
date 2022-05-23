import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({text}) => {

    const headerStyles ={
        backgroundColor:'blue',
        color:'red'
    }

  return (
      <div className="container" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>

    <h2 style={{color:"#ff6a95" , fontSize:'3rem'}} ><Link to='/' style={{color:'#ff6a95'}}>{text}</Link></h2>
      </div>
  )
}

export default Header