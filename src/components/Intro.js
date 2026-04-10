import React, {useState, useEffect} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav'
import CSLogo from './images/CSLogo4.png'


const Intro = () => {

    //set initital state of phrase to be transitioned
    const[phrase, changePhraseState] = useState("web pages")

    useEffect(() => {
        const phraseArray = ["Ruby on Rails APIs", "React apps", "Drupal sites", "user experiences"]
        let i = 0

        const intervalId = setInterval(() => {
            changePhraseState(phraseArray[i])
            i = (i + 1) % phraseArray.length
        }, 2500)

        return () => clearInterval(intervalId)
    }, [])

    //Set interval so that 
    const Subtitle = styled.h5`
    padding-top: 150px; 
    color: purple; 
    margin-left: 50px;
    @media (max-width: 600px) {
        margin-top: -20px;
        margin-left: 30px;
      }
    `;

    const Title = styled.h1`
    padding-top: 10px; 
    color: purple; 
    margin-left: 50px;
    font-size: 55px;
    @media (max-width: 600px) {
        font-size: 35px;
        margin-left: 30px;
      };
    `;

    const Arrow = styled.i`
    width: 30px;
    color: purple;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3px;
    @media (max-width: 600px) {
        display: none;
      };
    `;

    const Text = styled.div`
    margin-left: auto;
    margin-right: auto;
    color: purple;
    width: 100px;
    margin-top: 18%;
    @media (max-width: 600px) {
        display: none;
      };
    `

    return (
        <Jumbotron fluid id="jumbotron" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&w=1000&q=80')", backgroundSize: 'cover', height:'100vh'}}>
            <Subtitle>Hello, my name is </Subtitle>
            <Title>Christina Sohn.</Title>
            <Title>I create and design <span id="test">{phrase}.</span></Title>
            <Nav.Link href="#my-story">
                <Text>Learn more</Text>
                <Arrow className="fa fa-chevron-down" ></Arrow>
            </Nav.Link>
        </Jumbotron>
    )
}

export default Intro

//animated text: https://medium.com/@valentyn.vasylenko/typewriter-effect-with-alternating-text-in-pure-css3-72cf0c7e6c5