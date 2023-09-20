import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
export class OurProducts extends Component {
  render() {
    return (
      <>
        <div id='Products'>
            <h2 className='text-center mt-5'>Our Products</h2>
    <Card style={{ width: '18rem' }} className='col-3 product'>
      <Card.Img variant="top" src="/images/1.jpg" />
      <Card.Body>
        <Card.Title>The view</Card.Title>
        <Card.Text>
          Mockups
        </Card.Text>
        <Button variant="success">Click here</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='col-3 product'>
      <Card.Img variant="top" src="/images/2.jpg" />
      <Card.Body>
        <Card.Title>The view</Card.Title>
        <Card.Text>
          Mockups
        </Card.Text>
        <Button variant="success">Click here</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='col-3 product'>
      <Card.Img variant="top" src="/images/3.jpg" />
      <Card.Body>
        <Card.Title>The view</Card.Title>
        <Card.Text>
          Mockups
        </Card.Text>
        <Button variant="success">Click here</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='col-3 product'>
      <Card.Img variant="top" src="/images/4.jpg" />
      <Card.Body>
        <Card.Title>The view</Card.Title>
        <Card.Text>
          Mockups
        </Card.Text>
        <Button variant="success">Click here</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='col-3 product'>
      <Card.Img variant="top" src="/images/5.jpg" />
      <Card.Body>
        <Card.Title>The view</Card.Title>
        <Card.Text>
          Mockups
        </Card.Text>
        <Button variant="success">Click here</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='col-3 product'>
      <Card.Img variant="top" src="/images/6.jpg" />
      <Card.Body>
        <Card.Title>The view</Card.Title>
        <Card.Text>
          Mockups
        </Card.Text>
        <Button variant="success">Click here</Button>
      </Card.Body>
    </Card>
               </div>
      </>
    )
  }
}
