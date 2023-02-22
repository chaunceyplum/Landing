import React from 'react'
import {
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='redBg footerClass'>
      <Container className='text-center'>
        <Row></Row>
        <Row>
          <Col>
            <h3>logo(logo)</h3>

            <Form>
              <FormGroup>
                <FormLabel>join our newsletter for free stuff</FormLabel>
                <FormControl
                  size='sm'
                  type='email'
                  placeholder='Enter Your Email Here!'
                />
              </FormGroup>
            </Form>
          </Col>
          <Col>
            <h3>useful links</h3>
          </Col>
          <Col>
            <h3>Social Media</h3>
          </Col>
          <br />
          <br />
          <br />
        </Row>
        <Row>
          <hr />
          <Col xs={12} md={4}>
            <p>©2023 Logo(logo) inc.</p>
          </Col>
          <Col xs={12} md={4} />
          <Col xs={12} md={4}>
            <ul>
              <li>privacy policy</li>
              <li>cookie policy</li>
              <li>cookie settigns</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
