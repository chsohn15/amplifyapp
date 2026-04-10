import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Popper from '@material-ui/core/Popper';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';

import ModalVideo from 'react-modal-video'

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
  paper: {
    border: '1px solid',
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.background.paper,
  },
}), { index: 1 });

// githubLinks: [{ label, url }] — one item = direct link, multiple = popper
// imageLeft: true = stepper on left, false = stepper on right
const ProjectCard = ({ images, title, description, technologies, youtubeVideoId, githubLinks = [], imageLeft = true, marginTop = '60px' }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const maxSteps = images.length;
  const popperOpen = Boolean(anchorEl);
  const popperId = popperOpen ? 'github-popper' : undefined;

  const handleGitHubClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleGitHubLinkClick = (url) => {
    setAnchorEl(null);
    window.open(url, '_blank');
  };

  const stepper = (
    <div className={classes.root}>
      <img
        className={classes.img}
        src={images[activeStep]}
        alt={`${title} screenshot ${activeStep + 1}`}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={() => setActiveStep((p) => p + 1)} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={() => setActiveStep((p) => p - 1)} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );

  const info = (
    <Card.Body>
      <Card.Title>
        {title}
        {youtubeVideoId && (
          <>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId={youtubeVideoId} onClose={() => setIsOpen(false)} />
            <YouTubeIcon onClick={() => setIsOpen(true)} style={{ cursor: 'pointer', fontSize: '30px', marginLeft: '15px' }} />
          </>
        )}
        {githubLinks.length === 1 && (
          <a href={githubLinks[0].url} target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ marginLeft: '10px', color: 'black' }} />
          </a>
        )}
        {githubLinks.length > 1 && (
          <>
            <GitHubIcon style={{ marginLeft: '10px', cursor: 'pointer' }} aria-describedby={popperId} onClick={handleGitHubClick} />
            <Popper id={popperId} open={popperOpen} anchorEl={anchorEl}>
              {githubLinks.map(({ label, url }) => (
                <Typography key={label} className={classes.paper} style={{ cursor: 'pointer' }} onClick={() => handleGitHubLinkClick(url)}>
                  {label}
                </Typography>
              ))}
            </Popper>
          </>
        )}
      </Card.Title>
      <Card.Text>
        <em>{description}</em><br /><br />
        <div>Technologies:</div>
        <ul>
          {technologies.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
      </Card.Text>
    </Card.Body>
  );

  return (
    <Container style={{ marginTop }}>
      <Card>
        <Row>
          {imageLeft ? (
            <>
              <Col sm={7}>{stepper}</Col>
              <Col sm={4} style={{ marginLeft: '0px' }}>{info}</Col>
            </>
          ) : (
            <>
              <Col sm={5} style={{ marginLeft: '0px' }}>{info}</Col>
              <Col sm={7}>{stepper}</Col>
            </>
          )}
        </Row>
      </Card>
    </Container>
  );
}

export default ProjectCard
