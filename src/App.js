import Intro from './components/Intro.js'
import Menu from './components/Menu.js'
import MyStory from './components/MyStory.js'
import Work from './components/Work.js'
import Projects from './components/Projects.js'
import Blogs from './components/Blogs.js'
import ContactMe from './components/ContactMe.js'
import Footer from './components/Footer.js'
import styled from 'styled-components';
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
//import { BrowserRouter } from 'react-router-dom'

function App() {

  const [blogs, addBlogs] = useState([])

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chsohn15')
    .then(res => res.json())
    .then(data => {
      addBlogs([...blogs, data.items.slice(0, 3)])})
  }, [])

  const Header = styled.h1`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  &:before, &:after {
    content: '';
    border-top: 2px solid;
    margin: 0 20px 0 0;
    flex: 1 0 20px;
  }
  &:after {
    margin: 0 0 0 20px;
  }
  `;


  return (
    <div className="App">
      <Menu />
      <Intro />
      <div class="main">
        <MyStory Header={Header}/>
        <Projects Header={Header}/>
        <Work Header={Header}/>
        <Blogs Header={Header} blogs={blogs}/>
        <ContactMe Header={Header}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
