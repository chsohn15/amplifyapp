import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectCard2 from './ProjectCard2'
import ProjectCard3 from './ProjectCard3'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SectionHeader from './SectionHeader'

const Projects = (props) => {
  const Header = props.Header
    return (
      <Container id="projects" style={{marginTop: '100px'}}>
        <Row style={{marginLeft: '0px', marginRight: '0px'}}>
          <SectionHeader Header={props.Header} title={"Projects"}/>
        </Row>
        <Row style={{marginLeft: '0px', marginTop: '0px', marginRight: '0px'}}>
        <Col>
            <Row >
                <Card.Body>
                  <Card.Text>
                  <ProjectCard />
                  <ProjectCard2 />
                  <ProjectCard3 />
                </Card.Text>
                </Card.Body>
            </Row>
        </Col>
      </Row>
      </Container>
            
    )
}

export default Projects