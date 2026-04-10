import React from 'react'
import styled from 'styled-components'
import GitHub from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'

const StyledFooter = styled.footer`
  background: #18181b;
  border-top: 2px solid var(--purple);
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  letter-spacing: 0.03em;
  margin: 0;
`

const IconLink = styled.a`
  color: rgba(255, 255, 255, 0.65);
  margin-left: 16px;
  display: inline-flex;
  align-items: center;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`

const Icons = styled.div`
  display: flex;
  align-items: center;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Copyright>Created and designed by Christina Sohn with React &middot; chsohn15@gmail.com</Copyright>
      <Icons>
        <IconLink href="mailto:chsohn15@gmail.com">
          <MailOutlineIcon style={{ fontSize: '22px' }} />
        </IconLink>
        <IconLink href="https://chsohn15.medium.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMedium} style={{ fontSize: '22px' }} />
        </IconLink>
        <IconLink href="https://github.com/chsohn15" target="_blank" rel="noopener noreferrer">
          <GitHub style={{ fontSize: '22px' }} />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/christina-sohn/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={{ fontSize: '22px' }} />
        </IconLink>
      </Icons>
    </StyledFooter>
  )
}

export default Footer
