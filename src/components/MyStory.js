import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components';
import SectionHeader from './SectionHeader'
import ProfilePhoto from './profilePhoto.jpg'
//import GitHub from '@material-ui/icons/GitHub';
//import LinkedInIcon from '@material-ui/icons/LinkedIn';

const MyStory = (props) => {


    return (
      <Container style={{marginTop: '75px'}} id="my-story">
        <Row style={{marginLeft: '0px', marginRight: '0px'}}>
          <SectionHeader Header={props.Header} title={"My Story"}/>
        </Row>
        <Row >
        <Col>
          <Card style={{border: 'none'}}>
            <Row >
              <Col md="8">
                <Card.Body>
                  <Card.Text>
                  <p>I am a full stack web developer with experience in Ruby and Javascript frameworks. Through my experience as a high school English teacher for five years, I crafted creative lessons and projects to appeal to a diversity of students and meet their learning goals. My detailed attention to the voice of the consumer, my love of language construction, and my interest in an intuitive and transformative user experience translate seamlessly into the coding world.   </p>
                    <p>When I transitioned to a software engineering student at Flatiron School coding bootcamp, I found another outlet for my creativity by building multifaceted projects using Ruby on Rails, Javascript, and React. My resourcefulness and hard work have been essential to ensuring that my projects are carefully planned, implemented, and edited.</p>
                    <pr>Here is a list of some of the technologies I have been using recently:</pr>
                <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Javascript</li>
                <li>Ruby on Rails</li>
                <li>HTML and CSS</li>
                <li>Material UI, Bootstrap UI, Semantic UI</li>
            </ul>

                  </Card.Text>
 
                </Card.Body>
              </Col>
              <Col md="4">
                <Card.Img
                  id="profile-image"
                  top
                  width="100%"
                  src={ProfilePhoto}
                  alt="Card image cap"
                />

              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      </Container>
    )
}

export default MyStory