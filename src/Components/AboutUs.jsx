import React, { Component } from 'react'
import './AboutUs.css';
export class AboutUs extends Component {
  render() {
    return (
      <>
      <div className='container' id='AboutUs'>
        <div className='col-5 about_l'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, dolores distinctio maiores Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur iure repellat aperiam labore aut possimus.</p>
       
        </div>
       <div className='col-6 about_l'>
            <img src="./images/AboutUs.jpg" alt="" />
        </div> 
         </div>
      </>
    )
  }
}
