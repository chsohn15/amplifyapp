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
                    <div style={{marginBottom: '0px'}}><em>Senior Web Developer/Engineer</em>, <strong>Facing History &#38; Ourselves</strong>, Brookline, Massachusetts. <em>September 2024 - Present.</em></div>
                    <div><em>Web Developer</em>, <strong>Facing History &#38; Ourselves</strong>, Brookline, Massachusetts.<em> June 2022 - August 2024.</em></div>
                    <div><em>Junior Web Developer</em>, <strong>Facing History &#38; Ourselves</strong>, Brookline, Massachusetts.<em> January 2021 - May 2022.</em></div>
            <ul>
              <li>Work closely with UX/UI designers to implement pixel-perfect and mobile responsive web pages for a seamless user experience</li>
              <li>Develop custom Drupal modules and themes, such as building digital hubs for school districts and recurring event series to increase educator engagement</li>
              <li>Communicate with stakeholders to understand requirements and implement changes to website features and layouts</li>
              <li>Collaborate in an Agile team environment, participating in sprint planning, code reviews, pair programming, and retrospectives</li>
              <li>Develop code in Javascript, SASS, Twig, and PHP to form the front-end and back-end of a Drupal 10 website</li>
              <li>Lead a cross-functional team to update and enhance website documentation</li>
              <li>Train colleagues in third-party fundraising and marketing platforms such as Hubspot and Jackson River Springboard</li>
              <li>Provide web development support to colleagues and stakeholders</li>
              <li>Conduct QA testing and facilitate release deployments</li>
              <li>Transition Facing History’s website from Drupal 7 to Drupal 10 to create the new Digital Experience Platform</li>
              <li>Progressed from Junior Web Developer to Senior Web Developer in just three years by consistently demonstrating strong problem-solving skills, leadership abilities, and a commitment to professional growth</li>
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
        </Col>
      </Row>
      </Container>
    )
}

export default Work