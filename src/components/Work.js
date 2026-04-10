import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SectionHeader from './SectionHeader'
import styled from 'styled-components'

const PURPLE = 'var(--purple)'

const Timeline = styled.div`
  position: relative;
  padding-left: 40px;
  margin-top: 30px;

  &::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 8px;
    bottom: 0;
    width: 2px;
    background-color: #e0d7f5;
  }
`

const TimelineEntry = styled.div`
  position: relative;
  margin-bottom: 48px;

  &::before {
    content: '';
    position: absolute;
    left: -36px;
    top: 6px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${PURPLE};
    border: 2px solid white;
    box-shadow: 0 0 0 2px ${PURPLE};
  }
`

const Company = styled.div`
  font-weight: 700;
  font-size: 1.05rem;
  color: #1a1a1a;
`

const Location = styled.span`
  font-weight: 400;
  color: #666;
  font-size: 0.9rem;
`

const RoleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-top: 4px;
  flex-wrap: wrap;
`

const Role = styled.span`
  font-style: italic;
  font-weight: 600;
  color: #1a1a1a;
  font-size: 1rem;
`

const DateBadge = styled.span`
  font-size: 0.78rem;
  color: #6B46C1;
  border: 1px solid #b39ddb;
  padding: 1px 8px;
  border-radius: 12px;
  white-space: nowrap;
`

const BulletList = styled.ul`
  margin-top: 12px;
  padding-left: 18px;
  color: #444;
  font-size: 0.92rem;
  line-height: 1.7;
`

const Work = (props) => {
  return (
    <Container id="work" style={{ marginTop: '75px' }}>
      <Row style={{ marginLeft: '0px', marginRight: '0px' }}>
        <SectionHeader Header={props.Header} title={"Work Experience"} />
      </Row>
      <Row>
        <Col>
          <Timeline>

            <TimelineEntry>
              <Company>Facing History &amp; Ourselves <Location>— Brookline, Massachusetts</Location></Company>
              <RoleRow>
                <Role>Senior Web Developer/Engineer</Role>
                <DateBadge>Sep 2024 – Present</DateBadge>
              </RoleRow>
              <RoleRow>
                <Role>Web Developer</Role>
                <DateBadge>Jun 2022 – Aug 2024</DateBadge>
              </RoleRow>
              <RoleRow>
                <Role>Junior Web Developer</Role>
                <DateBadge>Jan 2021 – May 2022</DateBadge>
              </RoleRow>
              <BulletList>
                <li>Work closely with UX/UI designers to implement pixel-perfect and mobile responsive web pages for a seamless user experience</li>
                <li>Develop custom Drupal modules and themes, such as building digital hubs for school districts and recurring event series to increase educator engagement</li>
                <li>Communicate with stakeholders to understand requirements and implement changes to website features and layouts</li>
                <li>Collaborate in an Agile team environment, participating in sprint planning, code reviews, pair programming, and retrospectives</li>
                <li>Develop code in Javascript, SASS, Twig, and PHP to form the front-end and back-end of a Drupal 10 website</li>
                <li>Lead a cross-functional team to update and enhance website documentation</li>
                <li>Train colleagues in third-party fundraising and marketing platforms such as Hubspot and Jackson River Springboard</li>
                <li>Conduct QA testing and facilitate release deployments</li>
                <li>Transition Facing History's website from Drupal 7 to Drupal 10 to create the new Digital Experience Platform</li>
                <li>Progressed from Junior Web Developer to Senior Web Developer in just three years by consistently demonstrating strong problem-solving skills, leadership abilities, and a commitment to professional growth</li>
              </BulletList>
            </TimelineEntry>

            <TimelineEntry>
              <Company>Flatiron School <Location>— Washington, DC</Location></Company>
              <RoleRow>
                <Role>Software Engineering Student</Role>
                <DateBadge>Jul 2020 – Oct 2020</DateBadge>
              </RoleRow>
              <BulletList>
                <li>Participated in full-time Software Engineering Program</li>
                <li>Produced projects with Ruby on Rails, Javascript, React, and Redux</li>
                <li>Collaborated and paired daily with cohort members to build labs, solve code challenges, and create projects</li>
                <li>Initiated and implemented project lifecycle, including composing database diagrams, wireframes, and project pitches; planning and assembling a minimum viable product; testing and extending project capabilities; and presenting a final product</li>
              </BulletList>
            </TimelineEntry>

            <TimelineEntry>
              <Company>South County High School <Location>— Lorton, VA</Location></Company>
              <RoleRow>
                <Role>English Teacher</Role>
                <DateBadge>Aug 2016 – Jun 2020</DateBadge>
              </RoleRow>
              <BulletList>
                <li>Successfully engaged students in grades 10–12 through varied methods including small group work, effective moderating of class discussion, and authentic assessments</li>
                <li>Collaborated with grade-level teams to create cohesive literary units centered around engaging topics</li>
                <li>Incorporated technology such as Google Suite and Canva into lesson plans</li>
                <li>Set measurable and attainable goals for student progress in writing throughout the year</li>
              </BulletList>
            </TimelineEntry>

          </Timeline>
        </Col>
      </Row>
    </Container>
  )
}

export default Work
