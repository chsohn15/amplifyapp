import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ReactPlayer from "react-player"
import AG1 from '../images/AG1.jpeg'
import AG2 from '../images/AG2.jpeg'
import AG3 from '../images/AG3.jpeg'
import AG4 from '../images/AG4.jpeg'
import AG5 from '../images/AG5.jpeg'
import AG6 from '../images/AG6.jpeg'
import AG7 from '../images/AG7.jpeg'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';

import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import ModalVideo from 'react-modal-video'
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';

const tutorialSteps = [
  {
    imgPath: AG1,
  },
  {
    imgPath: AG2,
  },
  {
    imgPath: AG3,
  },
  {
    imgPath: AG4,
  },
  {
    imgPath: AG5,
  },
  {
    imgPath: AG6,
  },
  {
    imgPath: AG7,
  },
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
  },
  paper: {
    border: '1px solid',
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.background.paper,
  },
}),{index: 1});

const ProjectCard3 = () => {

  const [isOpen, openModal] = useState(false)

  const classes = useStyles();
  const theme = useTheme();

  // Code for stepper 1
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //Code for popper
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;


return (
<Container style={{marginTop: "60px"}}>
  <Card>
    <Row>
      <Col sm={7}>
      <div className={classes.root}>
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
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
      <Col sm={4} style={{marginLeft: '0px'}}>
        <Card.Body>
          <Card.Title>{'K & C Art Gallery'}
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='Bf8jipkXKlU' onClose={() => openModal(false)} />
            <YouTubeIcon onClick={openModal} style={{cursor: 'pointer', fontSize: '30px', marginLeft: '15px'}}>Youtube</YouTubeIcon>
            <a href="https://github.com/chsohn15/final_art_gallery" target = "_blank" rel = "noopener noreferrer"><GitHubIcon style={{ marginLeft: '10px', color: 'black'}} aria-describedby={id} type="button" /></a>
          </Card.Title>
          <Card.Text>
          <em>A virtual art gallery that recreates the aesthetic and sensory experience of being in a museum </em><br/><br/>
          <div>Technologies: </div>
          <ul>
            <li>Javascript</li>
            <li>Ruby on Rails</li>
            <li>JQZoom Library</li>
            <li>HTML Canvas and SVG Graphics</li>
          </ul>
          </Card.Text>
        </Card.Body>
      </Col>
    </Row>
  </Card>
  </Container>

            
    )
}

export default ProjectCard3