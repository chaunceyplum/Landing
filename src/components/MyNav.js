import { useSpring, animated } from '@react-spring/web'
import { React } from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  Collapse,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
  FormLabel,
  FormGroup,
  ModalHeader,
} from 'react-bootstrap'

const MyNav = () => {
  const springs = useSpring({
    from: { opacity: 0, marginTop: -100 },
    to: { opacity: 1, marginTop: 0 },
    config: { delay: 1000, duration: 1000 },
  })
  return (
    <div>
      <animated.div style={{ ...springs }}>
        <Navbar collapseOnSelect expand='md' className='navClass ' sticky='top'>
          <Container>
            <Navbar.Brand href='#home'>
              <strong className='navText'>(Logo)</strong>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls='responsive-navbar-nav'
              className='navToggler'
            />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto navText'>
                <Nav.Link href='#features' className='navText'>
                  Features
                </Nav.Link>
                <Nav.Link href='#pricing' className='navText'>
                  Pricing
                </Nav.Link>
                {/* <NavDropdown
                title='Dropdown'
                id='collasible-nav-dropdown'
                className='navText'
              >
                <NavDropdown.Item href='#action/3.1' className='navText'>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2' className='navText'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3' className='navText'>
                  Something
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                {/* <NavDropdown.Item href='#action/3.4' className='navText'>
                  Separated link
                </NavDropdown.Item> 
              </NavDropdown> */}
              </Nav>
              <Nav>
                <Nav.Link href='#deets' className='navText'>
                  Log In
                </Nav.Link>
                <Nav.Link eventKey={2} href='#memes' className='navText'>
                  Sign Up
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </animated.div>
    </div>
  )
}

export default MyNav
