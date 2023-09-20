import React, { Component } from 'react'
export class Footer extends Component {
  render() {
    return (
      <>
        <footer>
            <div className="container">
<div className="col-4 m-auto footer_q">
    <img className='col-5' src="./images/logo-light.png" alt="" srcset="" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at optio libero obcaecati, quisquam architecto?</p>
</div>
<div className="col-4">
  <h4>Site Map</h4>
  <ul>
    <li className="foot_item">
      <a className="foot-link" href="/index.html">Home</a>
    </li>
    <li className="foot_item">
      <a className="foot-link" href="#Products">products</a>
    </li>
    <li className="foot_item">
      
      <a className="foot-link" href="#ContactUs">Contact Us</a>

    </li>
    <li className="foot_item">
      <a className="foot-link" href="#AboutUs">About Us</a>
    </li>
  </ul>
</div>
</div> 
       </footer>
      </>
    )
  }
}
