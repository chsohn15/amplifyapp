import React from 'react' 
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SectionHeader from './SectionHeader'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

const ContactMe = (props) => {
    
    const Header = props.Header
    return(
        <Container id ="contact" style={{marginTop: '75px', marginBottom: '100px'}}>
            <Row style={{marginLeft: '0px', marginRight: '0px'}}>
                <SectionHeader Header={props.Header} title={"Contact Me"}/>
            </Row>
            <Col md="auto">
            <Row className="justify-content-md-center">
            <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Get in Touch</Card.Title>
                        <Card.Text>
                        Please email me at chsohn15@gmail.com if you would like to contact me. <br/>
                        I'd love to chat about anything ranging from job opportunities, new technologies, <br/>
                        entertaining podcasts, or great books to read.  
                        </Card.Text>
                    <Button variant="dark" style={{backgroundColor: '#087FCE'}}>Say Hello</Button>
                 </Card.Body>
            </Card>
            </Row>
            </Col>
        </Container>
    )
}

export default ContactMe

//#69636B grey