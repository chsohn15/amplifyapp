import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CSLogo from './images/CSLogo4.png'
import GitHub from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'


const Menu = () => {
    const [isHide, hide] = useState(false)
    const [stickyTopStatus, changeStatus] = useState("sticky-top")

    let prev = 0 
    const hideBar = () => {
        //prev = window.scrollY;

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
        <Navbar bg="dark" variant="dark" className={stickyTopStatus} id={stickyTopStatus}>
            <Navbar.Brand id="logo" href="#home" style={{marginLeft: '30px', marginTop: '-1px'}}>
                <img
                alt=""
                src={CSLogo}
                width="57"
                height="33"
                className="d-inline-block align-top"
            />{' '}</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#my-story">My Story</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#work">Work</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#contact">Contact Me</Nav.Link>
            </Nav>
            <a className="menu-icon" href="mailto:chsohn15@gmail.com" ><MailOutlineIcon style={{color:'white', marginTop: '3px', marginRight: '20px'}}/></a>
            <a className="menu-icon" href="https://www.linkedin.com/in/christina-sohn/" target = "_blank" rel = "noopener noreferrer"><LinkedInIcon style={{color:'white', marginTop: '3px', marginRight: '20px'}}/></a>
            <a className="menu-icon" href="https://github.com/chsohn15" target = "_blank" rel = "noopener noreferrer"><GitHub style={{color:'white', marginTop: '3px', marginRight: '20px'}}/></a>
            <a className="menu-icon" href="https://chsohn15.medium.com/" target = "_blank" rel = "noopener noreferrer"><FontAwesomeIcon icon={faMedium} style={{color:'white', marginTop: '6px', marginRight: '10px', fontSize: '23px'}}/></a>     
        </Navbar>
    )
}


export default Menu