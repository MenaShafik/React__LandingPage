import React, { Component } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './contactUs.css';
import Button from 'react-bootstrap/Button';

export class ContactUs extends Component {
  render() {
    return (
      <>
      <div id="ContactUs">
        <h3 className='text-center m-4'>Contact Us</h3>

        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="col-4 contactUs"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="User name"
        className=" col-4 contactUs"
      >
        <Form.Control type="user name" placeholder="name" />
      </FloatingLabel>

        
      <FloatingLabel className='col-11 m-auto text-center ' controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Button type='submit' className='col-11' variant="success">submit</Button>{' '}
</div>
      </>
    )
  }
}
