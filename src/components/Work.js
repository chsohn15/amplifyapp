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
      <Row style={{marginLeft: '100px', marginTop: '0px', marginRight: '100px'}}>
        <Col>
        <Card >
            <Row >
                <Card.Body style={{marginLeft: '10px'}}>
                  <Card.Text>
                  <p style={{whiteSpace: 'pre'}}><em>Software Engineering Student</em>, <strong>Flatiron School</strong>, Washington, DC.                                         July 2020 - October 2020</p>
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
                <Card.Body style={{marginLeft: '10px'}}>
                  <Card.Text>
                  <p style={{whiteSpace: 'pre'}}><em>English Teacher</em>, <strong>South County High School</strong>, Lorton, VA.                                                      August 2016 - June 2020</p>
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
                <Card.Body style={{marginLeft: '10px'}}>
                  <Card.Text>
                  <p style={{whiteSpace: 'pre'}}><em>ESOL Teacher</em>, <strong>South Lakes High School</strong>, Reston, VA.		                                                         August 2015 - June 2016</p>
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