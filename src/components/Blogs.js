import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SectionHeader from './SectionHeader'
import BlogCard from './BlogCard.js'

const Blogs = (props) => {
  const Header = props.Header

  const blogs = props.blogs[0]

return (
<Container id ="blog" style={{marginTop: '70px'}}>
  <Row style={{marginLeft: '0px', marginRight: '0px'}}>
      <SectionHeader Header={props.Header} title={"Blog Posts"}/>
  </Row>
<CardDeck>
  {blogs ? blogs.map(blog => <BlogCard blog={blog}/>) : null}
</CardDeck>
</Container>
    )
}

export default Blogs