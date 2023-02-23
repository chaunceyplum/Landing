import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Features = () => {
  return (
    <div>
      <div className='homeDiv'>
        <Container>
          <Row>
            <Col xs={1} />
            <Col xs={10}>
              <h1 className='redText'>
                <strong>
                  Lorem ipsum <i>dolor sit amet,</i> consectetur adipiscing
                  elit.
                </strong>
              </h1>
              <Col xs={1} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Features
