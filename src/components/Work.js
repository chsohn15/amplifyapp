import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SectionHeader from './SectionHeader'

const Work = (props) => {

  const Header = props.Header
    return (
      <Container id="work" style={{marginTop: '75px'}}>
      <Row style={{marginLeft: '0px', marginRight: '0px'}}>
        <SectionHeader Header={props.Header} title={"Work Experience"}/>
      </Row>
      <Row className='cards-container'>
        <Col>
        <Card className='card-work'>
            <Row >
                <Card.Body style={{marginLeft: '10px', paddingLeft: '2rem', paddingRight: '2rem'}}>
                  <Card.Text>
                    <div style={{marginBottom: '0px'}}><em>Web Developer/Engineer</em>, <strong>Facing History &#38; Ourselves</strong>, Brookline, Massachusetts. <em>June 2022 - Present.</em></div>
                    <div><em>Junior Web Developer</em>. <em>January 2021 - May 2022.</em></div>
            <ul>
                <li>Translate designs from Sketch into Storybook with SASS and CSS to create a seamless user experience</li>
                <li>Develop code in Javascript, SASS, and PHP to form the front-end and back-end of a Drupal website</li>
                <li>Train colleagues in fundraising and marketing platforms such as Hubspot and Jackson River Springboard</li>
                <li>Design and build landing pages that appeal to donors and educators</li>
                <li>Provide web development support to colleagues and stakeholders</li>
                <li>Conduct QA testing and facilitate release deployments</li>
            </ul>
                </Card.Text>
                </Card.Body>
            </Row>
          </Card >
        <Card style={{marginTop: '30px'}}>
            <Row >
                <Card.Body style={{marginLeft: '10px', paddingLeft: '2rem', paddingRight: '2rem'}}>
                  <Card.Text>
                  <p><em>Software Engineering Student</em>, <strong>Flatiron School</strong>, Washington, DC. <em>July 2020 - October 2020.</em></p>
            <ul>
                <li>Participated in full-time Software Engineering Program</li>
                <li>Produced projects with Ruby on Rails, Javascript, React, and Redux</li>
                <li>Collaborated and paired daily with cohort members to build labs, solve code challenges, and create projects</li>
                <li>Initiated and implemented project lifecycle, including composing database diagrams, wireframes, and project pitches; planning and assembling a minimum viable product; testing and extending project capabilities; and presenting a final product</li>
            </ul>
                </Card.Text>
                </Card.Body>
            </Row>
          </Card >
          <Card style={{marginTop: '30px'}}>
            <Row >
                <Card.Body style={{marginLeft: '10px', paddingLeft: '2rem', paddingRight: '2rem'}}>
                  <Card.Text>
                  <p><em>English Teacher</em>, <strong>South County High School</strong>, Lorton, VA. <em>August 2016 - June 2020.</em></p>
                  <ul>
                    <li>Successfully engaged students in grades 10-12 through varied methods including small group work, effective moderating of class discussion, and authentic assessments</li>
                    <li>Collaborated with grade-level teams to create cohesive literary units centered around engaging topics</li>
                    <li>Incorporated technology such as Google Suite and Canva into lesson plans</li>
                    <li>Set measurable and attainable goals for student progress in writing throughout the year</li>
                  </ul>
                </Card.Text>
                </Card.Body>
            </Row>
          </Card >
          <Card style={{marginTop: '30px'}}>
            <Row >
                <Card.Body style={{marginLeft: '10px', paddingLeft: '2rem', paddingRight: '2rem'}}>
                  <Card.Text>
                  <p><em>ESOL Teacher</em>, <strong>South Lakes High School</strong>, Reston, VA. <em>August 2015 - June 2016.</em></p>
                  <ul>
                    <li>Planned and implemented varied instruction for ESOL Level 1 Content and Literature classes</li>
                    <li>Set measurable and attainable academic goals for students based upon benchmark reading and writing assessments</li>
                    <li>Participated in professional development opportunities for Balanced Literacy program and co-teaching strategies</li>
                     </ul>
                </Card.Text>
                </Card.Body>
            </Row>
          </Card>
        </Col>
      </Row>
      </Container>
    )
}

export default Work