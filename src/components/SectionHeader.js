import React from 'react'
import Card from 'react-bootstrap/Card'


const SectionHeader = (props) => {

    const Header = props.Header
    return(          
    <Card style={{border: 'none', width: '1200px'}}>
        <Card.Body>
            <Header>{props.title}</Header>
        </Card.Body>
    </Card>)
}

export default SectionHeader