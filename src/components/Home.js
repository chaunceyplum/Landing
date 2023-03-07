import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { animated, useSpring, useScroll } from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import pic1 from '../images/pic1.svg'
const Home = () => {
  // const springs = useSpring({
  //   from: { opacity: 0, marginLeft: -500 },
  //   to: { opacity: 1, marginLeft: 0 },
  //   config: { delay: 700, duration: 700 },
  // })
  const springs = useSpring({
    from: { x: 0, y: 0 },
    to: async (next, cancel) => {
      // await next({ fontSize: '3em' })
      // await next({ fontSize: '1em' })
      await next({ x: 80, y: 20 })
      await next({ x: 0, y: 0 })
      await next({ x: -80, y: 20 })
      await next({ x: 0, y: 0 })
    },

    loop: true,
    config: {
      mass: 5,
      friction: 120,
      tension: 120,
    },
  })
  const alignCenter = { display: 'flex', alignItems: 'center' }
  //const { scrollYProgress } = useScroll()

  return (
    <div className=''>
      <div className='homeDiv'>
        <Parallax pages={7} style={{}}>
          <ParallaxLayer offset={0} speed={1.5}>
            <Container className='homeMainContent'>
              <Row>
                <Col xs={12} md={8}>
                  <animated.div style={{ ...springs }}>
                    <h1 className='redText'>
                      <strong>
                        Lorem ipsum <i>dolor sit amet,</i> consectetur
                        adipiscing elit.
                      </strong>
                    </h1>

                    <br />
                    <h4 className='beigeText'>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </h4>
                    <br />
                    <Button className='beigebg btn redText'>
                      <strong className='redText'>Learn More</strong>
                    </Button>
                  </animated.div>
                </Col>
                <Col xs={12} md={4}>
                  {/* <Container>
                    <Row>
                      <Col xs={10}>
                        <div className='center'>
                          <img src={pic1} alt={pic1} />
                        </div>
                      </Col>
                    </Row>
                  </Container> */}
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={1.5}>
            <Container>
              <Row>
                <Col xs={12} sm={6}>
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
                {/* <Col xs={2} /> */}

                <Col xs={12} sm={6}>
                  <div>
                    <Container className='redBg'>
                      <Row>
                        <Col xs={12} lg={6}>
                          <Container className='redBg'>
                            <animated.div style={{}}>
                              <h1>Aenean vel elit scelerisque mauris.</h1>
                              <br />
                              <h6>Venenatis tellus in metus vulputate.</h6>
                              <br />
                              <br />
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                            </animated.div>
                          </Container>
                        </Col>

                        <Col xs={12} lg={6}>
                          <Container className='redBg'>
                            <h1>Aenean vel elit scelerisque mauris.</h1>
                            <br />
                            <h6>Venenatis tellus in metus vulputate.</h6>
                            <br />
                            <br />
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </Container>
                        </Col>

                        <Col xs={12} lg={6}>
                          <Container className='redBg'>
                            <h1>Aenean vel elit scelerisque mauris.</h1>
                            <br />
                            <h6>Venenatis tellus in metus vulputate.</h6>
                            <br />
                            <br />
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </Container>
                        </Col>

                        <Col xs={12} lg={6}>
                          <Container className='redBg'>
                            <h1>Aenean vel elit scelerisque mauris.</h1>
                            <br />
                            <h6>Venenatis tellus in metus vulputate.</h6>
                            <br />
                            <br />
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </Container>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={1.5}>
            <Container>
              <Row>
                <Col xs={12} sm={6}>
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
                {/* <Col xs={2} /> */}
                <Col xs={12} sm={6}>
                  <Container className='redBg'>
                    <div className='darkText'>
                      <h1>Venenatis tellus in metus vulputate.</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Gravida cum sociis natoque penatibus et
                        magnis. Morbi quis commodo odio aenean. Bibendum at
                        varius vel pharetra vel turpis nunc eget. Ultricies
                        integer quis auctor elit sed vulputate mi sit amet. Amet
                        massa vitae tortor condimentum.
                      </p>
                      <p>
                        Malesuada proin libero nunc consequat. Condimentum
                        mattis pellentesque id nibh tortor id aliquet lectus.
                        Quis auctor elit sed vulputate mi. Ut pharetra sit amet
                        aliquam id diam maecenas. Aenean vel elit scelerisque
                        mauris. Lacinia quis vel eros donec ac odio tempor orci.
                        Imperdiet nulla malesuada pellentesque elit eget gravida
                        cum sociis. Venenatis tellus in metus vulputate. Urna
                        porttitor rhoncus dolor purus non. Enim nunc faucibus a
                        pellentesque sit amet porttitor.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        duis tristique. Odio eu feugiat pretium nibh ipsum
                        consequat. Fames ac turpis egestas maecenas pharetra
                        convallis posuere morbi leo. Integer enim neque volutpat
                        ac. Est ullamcorper eget nulla facilisi etiam dignissim
                        diam quis. Fermentum posuere urna nec tincidunt praesent
                        semper feugiat nibh sed. Blandit libero volutpat sed
                        cras ornare arcu dui. At elementum eu facilisis sed odio
                        morbi quis commodo. Convallis tellus id interdum velit
                        laoreet id donec ultrices. Urna nec tincidunt praesent
                        semper. Aliquet nibh praesent tristique magna sit amet.
                        Tempus quam pellentesque nec nam. Cursus mattis molestie
                        a iaculis at. Augue mauris augue neque gravida in
                        fermentum et. Sed arcu non odio euismod lacinia at quis.
                        Accumsan lacus vel facilisis volutpat est. Adipiscing
                        commodo elit at imperdiet dui accumsan sit amet. Id
                        cursus metus aliquam eleifend mi in.
                      </p>

                      {/* <p>
                        Nunc pulvinar sapien et ligula ullamcorper malesuada
                        proin. Eget velit aliquet sagittis id consectetur purus
                        ut. Enim sed faucibus turpis in eu mi bibendum. Sed cras
                        ornare arcu dui vivamus arcu felis bibendum ut. Vitae
                        congue eu consequat ac felis donec. Suspendisse sed nisi
                        lacus sed viverra tellus in. Turpis nunc eget lorem
                        dolor sed viverra ipsum nunc. Hendrerit gravida rutrum
                        quisque non tellus. Vel risus commodo viverra maecenas
                        accumsan lacus vel facilisis. Imperdiet sed euismod nisi
                        porta lorem mollis aliquam ut porttitor. Ornare
                        suspendisse sed nisi lacus. Mauris nunc congue nisi
                        vitae. Odio tempor orci dapibus ultrices in iaculis nunc
                        sed augue. Semper eget duis at tellus at. Elementum eu
                        facilisis sed odio morbi quis commodo odio aenean. Metus
                        dictum at tempor commodo ullamcorper a.
                      </p> */}
                    </div>
                  </Container>
                </Col>
                <Col xs={2} />
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1, end: 1.7 }}
            //offset={{ start: 1, end: 2 }}
            speed={1.5}
            style={{ ...alignCenter, justifyContent: 'flex-center' }}
            className='homeBackDiv'
          >
            <Container>
              <Row>
                <Col />
                <Col xs={0} sm={4}>
                  <Container className='beigeBg'>
                    <animated.div style={{}}>
                      <div className='beigeBg'>
                        <Container>
                          <div>
                            <h3 className='redText'>
                              Porta nibh venenatis cras sed felis eget velit
                              aliquet sagittis. Pellentesque nec nam aliquam sem
                              et tortor consequat id.
                            </h3>

                            <br />
                            <h6 className='darkText'>
                              Mattis enim ut tellus elementum sagittis vitae. Ut
                              consequat semper viverra nam libero. Elementum eu
                              facilisis sed odio morbi.
                            </h6>

                            <br />
                            <p className='darkText'>
                              Porta nibh venenatis cras sed felis eget velit
                              aliquet sagittis. Pellentesque nec nam aliquam sem
                              et tortor consequat id. Lectus magna fringilla
                              urna porttitor rhoncus dolor purus. Malesuada
                              fames ac turpis egestas sed tempus urna. Sit amet
                              risus nullam eget felis eget nunc lobortis.
                              Viverra ipsum nunc aliquet bibendum enim. Lacus
                              suspendisse faucibus interdum posuere lorem ipsum.
                              Morbi quis commodo odio aenean sed adipiscing diam
                              donec. Aliquam purus sit amet luctus venenatis
                              lectus. Venenatis urna cursus eget nunc
                              scelerisque viverra mauris.
                            </p>
                          </div>
                        </Container>
                      </div>
                    </animated.div>
                  </Container>
                </Col>
                <Col xs={2} />
                <Col xs={4} />
                <Col />
              </Row>
            </Container>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={-3.5}>
            <Container className=''>
              <Row className='center'>
                <Col xs={12} className='text-center'>
                  {/* <Container>
                    {/* <Row>
                      <Col />
                    </Row> 
                    <Row>
                       <Col /> 
                      <Col> */}
                  <div className='center'>
                    <img className='imgClass' src={pic1} alt={pic1} />
                  </div>
                  {/* </Col>
                      {/* <Col /> 
                    </Row>
                     <Row>
                      <Col />
                    </Row> 
                  </Container> */}
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={1.5}>
            <Container className='homeMainContent'>
              <Row className='center'>
                <Col xs={12} md={10} className='text-center'>
                  <Container>
                    <h1 className='redText'>
                      <strong>
                        <em>
                          Hendrerit gravida rutrum <i>quisque non tellus.</i>{' '}
                          Amet massa vitae tortor condimentum.
                        </em>
                      </strong>
                    </h1>

                    <br />
                    <h3 className='beigeText'>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.Vel risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                      Imperdiet sed euismod nisi porta lorem mollis aliquam ut
                      porttitor.
                    </h3>
                    <br />

                    <br />
                    <p className='beigeText'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Gravida cum sociis natoque penatibus et magnis.
                      Morbi quis commodo odio aenean. Bibendum at varius vel
                      pharetra vel turpis nunc eget. Ultricies integer quis
                      auctor elit sed vulputate mi sit amet. Amet massa vitae
                      tortor condimentum.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.Malesuada fames ac turpis egestas sed
                      tempus urna. Sit amet risus nullam eget felis eget nunc
                      lobortis. Viverra ipsum nunc aliquet bibendum enim. Lacus
                      suspendisse faucibus interdum posuere lorem ipsum.
                    </p>
                    {/* <Button className='beigebg btn '>
                      <strong>Learn More</strong>
                    </Button> */}
                  </Container>
                </Col>
                {/* <Col xs={10} lg={4}>
                  <div className='text-white'>blah</div>
                </Col> */}
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={-3.5}>
            <Container className='homeMainContent'>
              <Row className='center'>
                <Col xs={12} md={10} className='text-center'>
                  <Container>
                    <Row>
                      <Col xs={12} md={6} lg={3}>
                        <Container className='redBg'>
                          <animated.div style={{}}>
                            <h1>
                              Bibendum at varius vel pharetra vel turpis nunc
                              eget.
                            </h1>
                            <br />
                            <h6>
                              Lacus suspendisse faucibus interdum posuere lorem
                              ipsum.
                            </h6>
                            <br />
                            <br />
                            <p>
                              Lectus magna fringilla urna porttitor rhoncus
                              dolor purus. Malesuada fames ac turpis egestas sed
                              tempus urna.
                            </p>
                          </animated.div>
                        </Container>
                      </Col>

                      <Col xs={12} md={6} lg={3}>
                        <Container className='redBg'>
                          <h1>
                            Bibendum at varius vel pharetra vel turpis nunc
                            eget.
                          </h1>
                          <br />
                          <h6>
                            Lacus suspendisse faucibus interdum posuere lorem
                            ipsum.
                          </h6>
                          <br />
                          <br />
                          <p>
                            Lectus magna fringilla urna porttitor rhoncus dolor
                            purus. Malesuada fames ac turpis egestas sed tempus
                            urna.
                          </p>
                        </Container>
                      </Col>

                      <Col xs={12} md={6} lg={3}>
                        <Container className='redBg'>
                          <h1>
                            Bibendum at varius vel pharetra vel turpis nunc
                            eget.
                          </h1>
                          <br />
                          <h6>
                            Lacus suspendisse faucibus interdum posuere lorem
                            ipsum.
                          </h6>
                          <br />
                          <br />
                          <p>
                            Lectus magna fringilla urna porttitor rhoncus dolor
                            purus. Malesuada fames ac turpis egestas sed tempus
                            urna.
                          </p>
                        </Container>
                      </Col>

                      <Col xs={12} md={6} lg={3}>
                        <Container className='redBg'>
                          <h1>
                            Bibendum at varius vel pharetra vel turpis nunc
                            eget.
                          </h1>
                          <br />
                          <h6>
                            Lacus suspendisse faucibus interdum posuere lorem
                            ipsum.
                          </h6>
                          <br />
                          <br />
                          <p>
                            Lectus magna fringilla urna porttitor rhoncus dolor
                            purus. Malesuada fames ac turpis egestas sed tempus
                            urna.
                          </p>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Col>
                {/* <Col xs={10} lg={4}>
                  <div className='text-white'>blah</div>
                </Col> */}
              </Row>
            </Container>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  )
}

export default Home
