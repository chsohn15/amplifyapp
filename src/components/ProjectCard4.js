import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import CR1 from './images/CR1.png'
import CR2 from './images/CR2.png'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import GitHubIcon from '@material-ui/icons/GitHub';

const tutorialSteps = [
  { imgPath: CR1 },
  { imgPath: CR2 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    flexGrow: 1,
  },
  img: {
    maxWidth: 600,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    height: '340px',
    objectFit: 'cover',
    objectPosition: 'top',
    "@media only screen and (max-width: 600px)": {
      height: '200px',
    }
  },
}), { index: 1 });

const ProjectCard4 = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Container>
      <Card>
        <Row>
          <Col sm={7}>
            <div className={classes.root}>
              <img
                className={classes.img}
                src={tutorialSteps[activeStep].imgPath}
                alt="Close Reader app screenshot"
              />
              <MobileStepper
                steps={maxSteps}
                position="static"
                variant="dots"
                activeStep={activeStep}
                nextButton={
                  <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                  </Button>
                }
                backButton={
                  <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                  </Button>
                }
              />
            </div>
          </Col>
          <Col sm={4} style={{ marginLeft: '0px' }}>
            <Card.Body>
              <Card.Title>Close Reader
                <GitHubIcon
                  style={{ marginLeft: '10px', cursor: 'pointer' }}
                  onClick={() => window.open("https://github.com/chsohn15/close-reading-app", "_blank")}
                />
              </Card.Title>
              <Card.Text>
                <em>A literary analysis tool powered by a multi-step agentic workflow — passages are classified, then analyzed in parallel for tone, literary devices, and themes. Key phrases are highlighted in the text with clickable AI-generated insights.</em><br /><br />
                <div>Technologies:</div>
                <ul>
                  <li>React</li>
                  <li>Claude API (Anthropic)</li>
                  <li>Agentic workflow (classify → parallel agents → structured JSON)</li>
                  <li>Prompt engineering / structured output</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default ProjectCard4
