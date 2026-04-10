import React from 'react'
import ProjectCard from './ProjectCard'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SectionHeader from './SectionHeader'
import Card from 'react-bootstrap/Card'

import CR1 from './images/CR1.png'
import CR2 from './images/CR2.png'

import BookQuest1 from './images/BookQuest1.jpg'
import BookQuest2 from './images/BookQuest2.jpg'
import BookQuest3 from './images/BookQuest3.jpg'
import BookQuest4 from './images/BookQuest4.jpg'
import BookQuest5 from './images/BookQuest5.jpg'

import HP1 from './images/HP1.jpg'
import HP2 from './images/HP2.jpg'
import HP3 from './images/HP3.jpg'
import HP4 from './images/HP4.jpg'
import HP5 from './images/HP5.jpg'
import HP6 from './images/HP6.jpg'
import HP7 from './images/HP7.jpg'
import HP8 from './images/HP8.jpg'
import HP9 from './images/HP9.jpg'

import AG1 from './images/AG1.jpg'
import AG2 from './images/AG2.jpg'
import AG3 from './images/AG3.jpg'
import AG4 from './images/AG4.jpg'
import AG5 from './images/AG5.jpg'
import AG6 from './images/AG6.jpg'
import AG7 from './images/AG7.jpg'

const projects = [
  {
    title: 'Close Reader',
    images: [CR1, CR2],
    description: 'A literary analysis tool powered by a multi-step agentic workflow — passages are classified, then analyzed in parallel for tone, literary devices, and themes. Key phrases are highlighted in the text with clickable AI-generated insights.',
    technologies: ['React', 'Claude API (Anthropic)', 'Agentic workflow (classify → parallel agents → structured JSON)', 'Prompt engineering / structured output'],
    githubLinks: [
      { label: 'Github', url: 'https://github.com/chsohn15/close-reading-app' },
    ],
    imageLeft: true,
    marginTop: '0px',
  },
  {
    title: 'BookQuest',
    images: [BookQuest1, BookQuest2, BookQuest3, BookQuest4, BookQuest5],
    description: 'An app designed to motivate young people to read and interact with books through a rewards system',
    technologies: ['React Hooks and Redux', 'Ruby on Rails', 'Google Books API and Embedded Viewer', 'Recharts API', 'JSON Web Tokens, OAuth', 'Material UI, Bootstrap, CSS'],
    youtubeVideoId: 'GHGlrOopo3M',
    githubLinks: [
      { label: 'Github Frontend', url: 'https://github.com/chsohn15/book_quest_frontend/tree/master/book-quest-react' },
      { label: 'Github Backend', url: 'https://github.com/chsohn15/book_quest_backend' },
    ],
    imageLeft: true,
  },
  {
    title: 'The Harry Potter Writing App',
    images: [HP1, HP2, HP3, HP4, HP5, HP6, HP7, HP8, HP9],
    description: 'An app designed to engage students in writing and connect students with their teachers',
    technologies: ['React', 'Ruby on Rails', 'JSON Web Tokens, OAuth', 'Material UI, Bootstrap, Semantic UI, CSS'],
    youtubeVideoId: 'IDtMxssicik',
    githubLinks: [
      { label: 'Github Frontend', url: 'https://github.com/chsohn15/hp_writing_app_frontend' },
      { label: 'Github Backend', url: 'https://github.com/chsohn15/hp_writing_app_backend' },
    ],
    imageLeft: false,
  },
  {
    title: 'K & C Art Gallery',
    images: [AG1, AG2, AG3, AG4, AG5, AG6, AG7],
    description: 'A virtual art gallery that recreates the aesthetic and sensory experience of being in a museum',
    technologies: ['Javascript', 'Ruby on Rails', 'JQZoom Library', 'HTML Canvas and SVG Graphics'],
    youtubeVideoId: 'Bf8jipkXKlU',
    githubLinks: [
      { label: 'Github', url: 'https://github.com/chsohn15/final_art_gallery' },
    ],
    imageLeft: true,
  },
];

const Projects = (props) => {
  return (
    <Container id="projects" style={{ marginTop: '100px' }}>
      <Row style={{ marginLeft: '0px', marginRight: '0px' }}>
        <SectionHeader Header={props.Header} title={"Projects"} />
      </Row>
      <Row style={{ marginLeft: '0px', marginTop: '0px', marginRight: '0px' }}>
        <Col>
          <Row>
            <Card.Body>
              <Card.Text>
                {projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </Card.Text>
            </Card.Body>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects
