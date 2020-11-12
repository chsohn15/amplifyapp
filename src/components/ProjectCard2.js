import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import HP1 from './images/HP1.jpg'
import HP2 from './images/HP2.jpg'
import HP3 from './images/HP3.jpg'
import HP4 from './images/HP4.jpg'
import HP5 from './images/HP5.jpg'
import HP6 from './images/HP6.jpg'
import HP7 from './images/HP7.jpg'
import HP8 from './images/HP8.jpg'
import HP9 from './images/HP9.jpg'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Popper from '@material-ui/core/Popper';
import Popover from '@material-ui/core/Popover';


import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';

const tutorialSteps = [
  {
    imgPath: HP1,
  },
  {
    imgPath: HP2,
  },
  {
    imgPath: HP3,
  },
  {
    imgPath: HP4,
  },
  {
    imgPath: HP5,
  },
  {
    imgPath: HP6,
  },
  {
    imgPath: HP7,
  },
  {
    imgPath: HP8,
  },
  {
    imgPath: HP9,
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
}), {index: 1});

const ProjectCard2 = () => {

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
      <Col sm={5} style={{marginLeft: '0px'}}>
        <Card.Body>
          <Card.Title>The Harry Potter Writing App
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='IDtMxssicik' onClose={() => openModal(false)} />
            <YouTubeIcon onClick={openModal} style={{cursor: 'pointer', fontSize: '30px', marginLeft: '15px'}}>Youtube</YouTubeIcon>
            <GitHubIcon style={{ marginLeft: '10px'}} aria-describedby={id} type="button" onClick={handleClick}/>
            <Popper id={id} open={open} anchorEl={anchorEl} >
              <Typography anchorEl={anchorEl} onClick={() => {
                handleClick()
                window.open("https://github.com/chsohn15/hp_writing_app_frontend", "_blank")}} className={classes.paper} style={{cursor: 'pointer'}}>Github Frontend</Typography>
              <Typography anchorEl={anchorEl} onClick={() => {
                handleClick()
                window.open("https://github.com/chsohn15/hp_writing_app_backend", "_blank")}} className={classes.paper} style={{cursor: 'pointer'}}>Github Backend</Typography>
          </Popper>
          </Card.Title>
          <Card.Text>
          <em>An app designed to engage students in writing and connect students with their teachers</em><br/><br/>
          <div>Technologies: </div>
          <ul>
            <li>React</li>
            <li>Ruby on Rails</li>
            <li>JSON Web Tokens, OAuth</li>
            <li>Material UI, Bootstrap, Semantic UI, CSS</li>
          </ul>
          </Card.Text>
        </Card.Body>
      </Col>
      <Col sm={7} >
      <div className={classes.root}>
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <MobileStepper
        style={{marginRight: '0px'}}
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
    </Row>
  </Card>

  </Container>

            
    )
}

export default ProjectCard2