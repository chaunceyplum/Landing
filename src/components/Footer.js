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
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='redBg footerClass'>
      <Container className='redBg text-center'>
        <Row></Row>
        <Row>
          <Col xs={12} md={4}>
            <br />
            <h3>logo(logo)</h3>
            <br />
            <br />
            <br />
            <Form>
              <FormGroup>
                <FormLabel>join our newsletter for free stuff</FormLabel>
                <br />
                <FormControl
                  size='sm'
                  type='email'
                  placeholder='Enter Your Email Here!'
                />
              </FormGroup>
            </Form>
            <br />
            <br />
            <br />
          </Col>
          <Col xs={12} md={4}>
            <br />
            <h3>useful links</h3>

            <br />
            <ul>
              <li>Features</li>
              <br />
              <li>Pricing</li>
              <br />
              <li>Sign Up</li>
              <br />
              <li>Log In</li>
              <br />
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <br />
            <h3>Social Media</h3>
            <br />
            <ul>
              <li>
                <FaTwitter />
              </li>
              <br />
              <li>
                <FaGithub />
              </li>
              <br />
              <li>
                <FaInstagram />
              </li>
              <br />
              <li>
                <FaLinkedin />
              </li>
              <br />
            </ul>
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
          <br />
        </Row>
      </Container>
    </div>
  )
}

export default Footer
