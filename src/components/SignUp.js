import React, { useState } from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
  Row,
} from 'react-bootstrap'
import { ModalHeader } from 'reactstrap'

const SignUp = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [userUserName, setUserUserName] = useState('')
  const [userConsole, setUserConsole] = useState('')
  const [userGamerTag, setUserGamerTag] = useState('')

  const [validated, setValidated] = useState(false)
  return (
    <div>
      <div>
        {!userEmail ? (
          <div>
            <Button
              variant='dark'
              onClick={handleShow}
              className='redBg darkText'
            >
              Sign Up
            </Button>

            <Modal show={show} onHide={handleClose} className=''>
              <ModalHeader closeButton>
                <ModalTitle>Sign Up</ModalTitle>
              </ModalHeader>
              <ModalBody className='offsetBackground' id='signUpForm'>
                <Container className='offsetBackground '>
                  <Row>
                    <Col />
                    <Col xs={10} lg={8}>
                      <Form noValidate validated={validated}>
                        <FormGroup className='text-center'>
                          <FormLabel>
                            <h1>Full Name</h1>
                          </FormLabel>
                          <FormControl
                            onChange={(e) => setUserName(e.target.value)}
                            type='text'
                            placeholder='Type Full Name Here!'
                            required
                          />
                        </FormGroup>
                        <br />
                        <br />
                        <FormGroup className='text-center'>
                          <FormLabel>
                            <h1>Gamertag</h1>
                          </FormLabel>
                          <FormControl
                            onChange={(e) => setUserGamerTag(e.target.value)}
                            type='text'
                            placeholder='Type Gamer Tag Here'
                            required
                          />
                          <Form.Control.Feedback type='invalid'>
                            Please provide a valid Gamertag.
                          </Form.Control.Feedback>
                        </FormGroup>
                        <br />
                        <br />
                        <FormGroup className='text-center'>
                          <FormLabel>
                            <h1>UserName</h1>
                          </FormLabel>
                          <FormControl
                            onChange={(e) => setUserUserName(e.target.value)}
                            type='text'
                            placeholder='Type Username Here'
                            required
                          />
                          <Form.Control.Feedback type='invalid'>
                            Please provide a valid Username.
                          </Form.Control.Feedback>
                        </FormGroup>
                        <br />
                        <br />
                        <FormGroup className='text-center'>
                          <FormLabel>
                            <h1>Console</h1>
                          </FormLabel>
                          <FormControl
                            onChange={(e) => setUserConsole(e.target.value)}
                            type='radio'
                            placeholder='Type Password Here'
                            required
                          />
                          <Form.Control.Feedback type='invalid'>
                            Please provide a valid console.
                          </Form.Control.Feedback>
                        </FormGroup>
                        <br />
                        <br />
                        <FormGroup className='text-center'>
                          <FormLabel>
                            <h1>Email</h1>
                          </FormLabel>
                          <FormControl
                            onChange={(e) => setUserEmail(e.target.value)}
                            type='email'
                            placeholder='Type Email Here'
                            required
                          />
                          <Form.Control.Feedback type='invalid'>
                            Please provide a valid Email.
                          </Form.Control.Feedback>
                        </FormGroup>
                        <br />
                        <br />

                        <FormGroup className='text-center'>
                          <FormLabel>
                            <h1>Password</h1>
                          </FormLabel>
                          <FormControl
                            onChange={(e) => setUserPassword(e.target.value)}
                            type='password'
                            placeholder='Type Password Here'
                            required
                          />
                          <Form.Control.Feedback type='invalid'>
                            Please provide a valid password.
                          </Form.Control.Feedback>
                        </FormGroup>
                        <br />
                        <br />
                        {/* <FormGroup>
                        <Container>
                          <Row>
                            <Col xs={1} />
                            <Col xs={4} className='text-center'>
                              <Button type='cancel'>Clear</Button>
                            </Col>
                            <Col xs={2} />
                            <Col xs={4} className='text-center'>
                              <Button type='Submit'>Submit</Button>
                            </Col>
                            <Col xs={1} />
                          </Row>
                        </Container>
                      </FormGroup> */}
                      </Form>
                    </Col>
                    <Col />
                  </Row>
                </Container>
              </ModalBody>
              <ModalFooter>
                <Button variant='secondary' onClick={handleClose}>
                  Close
                </Button>
                <Button variant='primary'>Save Changes</Button>
                {/* {user
                ? (state, action) => {
                    Setter(state, action, user)
                    console.log(user)
                  }
                : console.log('user state is empty')} */}
              </ModalFooter>
            </Modal>
          </div>
        ) : (
          <Container>
            <Row>
              <Col>
                {/* <a href='#'> */}
                <Container>
                  <Row>
                    <Col xs={4}>
                      <Button className=' btn btn-light'>
                        <h6 className=''>(email)</h6>
                      </Button>
                    </Col>
                    <Col xs={4} />
                    <Col xs={4}>
                      <Button
                        className=' btn btn-light '
                        // onClick={signOutUser()}
                      >
                        <h6 className=''>Sign Out</h6>
                      </Button>
                    </Col>
                  </Row>
                </Container>
                {/* </a> */}
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </div>
  )
}

export default SignUp
