import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { animated, useSpring } from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Home = () => {
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  const alignCenter = { display: 'flex', alignItems: 'center' }

  return (
    <div>
      <div className='homeDiv'>
        <Parallax pages={2} style={{}}>
          <ParallaxLayer offset={0} speed={12.5}>
            <Container className='homeMainContent'>
              <Row>
                <Col xs={10} md={8}>
                  <div>
                    <h1 className='redText'>
                      <strong>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </strong>
                    </h1>

                    <br />
                    <h4 className='beigeText'>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </h4>
                    <br />
                    <Button className='beigebg btn '>
                      <strong>Learn More</strong>
                    </Button>
                  </div>
                </Col>
                <Col xs={10} lg={4}>
                  <animated.div style={{ ...springs }}>
                    <div className='text-white'>blah</div>
                  </animated.div>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={10.5}>
            <Container>
              <Row>
                <Col xs={6}>
                  <div>
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <Typography sx={{ fontSize: 14 }} color='' gutterBottom>
                          Word of the Day
                        </Typography>
                        <Typography variant='h5' component='div'>
                          benevolent
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                          adjective
                        </Typography>
                        <Typography variant='body2'>
                          well meaning and kindly.
                          <br />
                          {'"a benevolent smile"'}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size='small'>Learn More</Button>
                      </CardActions>
                    </Card>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className='text-white'>stexdrcyftuvgybhunijmok</div>
                </Col>
                <Col xs={2} />
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1, end: 3 }}
            style={{ ...alignCenter, justifyContent: 'flex-start' }}
          >
            <div className={{}}>
              <p>I'm a sticky layer</p>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  )
}

export default Home
