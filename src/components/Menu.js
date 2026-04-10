import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CSLogo from './images/CSLogo4.png'
import GitHub from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

const StyledNavbar = styled(Navbar)`
  background: #18181b !important;
  border-bottom: 2px solid var(--purple);
  padding: 10px 30px;
`

const StyledNavLink = styled.a`
  color: rgba(255, 255, 255, 0.75) !important;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.88rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0 2px;
  padding: 6px 14px !important;
  border-radius: 4px;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: white !important;
    background: rgba(107, 70, 193, 0.25);
    text-decoration: none;
  }
`

const IconLink = styled.a`
  color: rgba(255, 255, 255, 0.65);
  margin-left: 16px;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`

const Menu = () => {
    const [stickyTopStatus, changeStatus] = useState("sticky-top")

    let prev = 0
    const hideBar = () => {
        window.scrollY > prev ?
        changeStatus("")
        :
        changeStatus("sticky-top")

        prev = window.scrollY;
    }

    useEffect(() => {
        window.addEventListener('scroll', hideBar);
        return () => window.removeEventListener('scroll', hideBar);
    }, [])

    return (
        <StyledNavbar variant="dark" className={stickyTopStatus} id={stickyTopStatus}>
            <Navbar.Brand id="logo" href="#home" style={{ marginRight: '20px' }}>
                <img
                    alt="CS Logo"
                    src={CSLogo}
                    width="57"
                    height="33"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <StyledNavLink href="#my-story">My Story</StyledNavLink>
                <StyledNavLink href="#work">Work</StyledNavLink>
                <StyledNavLink href="#projects">Projects</StyledNavLink>
                <StyledNavLink href="#blog">Blog</StyledNavLink>
                <StyledNavLink href="#contact">Contact</StyledNavLink>
            </Nav>
            <IconLink className="menu-icon" href="mailto:chsohn15@gmail.com">
                <MailOutlineIcon style={{ fontSize: '22px' }} />
            </IconLink>
            <IconLink className="menu-icon" href="https://www.linkedin.com/in/christina-sohn/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{ fontSize: '22px' }} />
            </IconLink>
            <IconLink className="menu-icon" href="https://github.com/chsohn15" target="_blank" rel="noopener noreferrer">
                <GitHub style={{ fontSize: '22px' }} />
            </IconLink>
            <IconLink className="menu-icon" href="https://chsohn15.medium.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faMedium} style={{ fontSize: '22px' }} />
            </IconLink>
        </StyledNavbar>
    )
}

export default Menu
