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
    <div className='homeDiv'>
      <div className=''>
        <Parallax pages={4} style={{}}>
          <ParallaxLayer offset={0} speed={1.5}>
            <Container className='homeMainContent'>
              <Row>
                <Col xs={10} md={8}>
                  <animated.div style={{ ...springs }}>
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
                  </animated.div>
                </Col>
                <Col xs={10} lg={4}>
                  <animated.div style={{ ...springs }}>
                    <div className='text-white'>blah</div>
                  </animated.div>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.5}>
            <Container>
              <Row>
                <Col xs={6}>
                  <div>
                    {/* <Card sx={{ minWidth: 275 }}>
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
                    </Card> */}
                  </div>
                </Col>
                <Col xs={2} />

                <Col xs={4}>
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
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={1.5}>
            <Container>
              <Row>
                <Col xs={6}>
                  <div>
                    {/* <Card sx={{ minWidth: 275 }}>
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
                    </Card> */}
                  </div>
                </Col>
                <Col xs={2} />
                <Col xs={4}>
                  <div className='text-white'>stexdrcyftuvgybhunijmok</div>
                </Col>
                <Col xs={2} />
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1, end: 3 }}
            style={{ ...alignCenter, justifyContent: 'flex-center' }}
          >
            <Container>
              <Row>
                <Col />
                <Col xs={4}>
                  <Container>
                    <div className={{}}>
                      <div>
                        <h3 className='redText'>
                          blahblahblahghkajlskf;lmdfaksdjlfasdf ASJDKNksnja
                          aJSHF jhas jh asFJH s
                        </h3>

                        <br />
                        <h6 className='beigeText'>
                          sakjdhf qwej qer qer q er wer qwefqs d fasdg sfg rtg
                          etyh ryuj egvsdacsAD sadaS D asf adf h etyh tyh ert hw
                          ers fwe d asd
                        </h6>

                        <br />
                        <p>
                          asdfasd a sd fa sdf asd fas dfa sdf asdf sd fas df asd
                          fds dsf dsf asd fa sdf qds ga sd
                        </p>
                      </div>
                    </div>
                  </Container>
                </Col>
                <Col xs={2} />
                <Col xs={4} />
                <Col />
              </Row>
            </Container>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  )
}

export default Home
