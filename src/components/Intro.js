import React, {useState, useEffect} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav'
import CSLogo from './images/CSLogo4.png'


const Intro = () => {

    //set initital state of phrase to be transitioned
    const[phrase, changePhraseState] = useState("web pages")

    useEffect(() => {
        const phraseArray = ["digital experiences", "AI-powered tools", "experiences that teach"]
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
    color: #6B46C1;
    margin-left: 50px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    @media (max-width: 600px) {
        margin-top: -20px;
        margin-left: 30px;
      }
    `;

    const Title = styled.h1`
    padding-top: 10px;
    color: #6B46C1;
    margin-left: 50px;
    font-size: 55px;
    font-family: 'Playfair Display', serif;
    @media (max-width: 600px) {
        font-size: 35px;
        margin-left: 30px;
      };
    `;

    const Arrow = styled.i`
    width: 30px;
    color: #6B46C1;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3px;
    @media (max-width: 600px) {
        display: none;
      };
    `;

    const Text = styled.div`
    color: #6B46C1;
    font-family: 'Inter', sans-serif;
    text-align: center;
    `

    const BottomLink = styled(Nav.Link)`
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
    @media (max-width: 600px) {
        display: none;
      };
    `

    return (
        <Jumbotron fluid id="jumbotron" style={{ background: 'linear-gradient(135deg, #e9e0fb 0%, #f8f5ff 50%, #d9cef7 100%)', height:'100vh', position: 'relative'}}>
            <Subtitle>Hello, my name is </Subtitle>
            <Title>Christina Sohn.</Title>
            <Title>I create and design <span id="test">{phrase}.</span></Title>
            <BottomLink href="#my-story">
                <Text>Learn more</Text>
                <Arrow className="fa fa-chevron-down" />
            </BottomLink>
        </Jumbotron>
    )
}

export default Intro

//animated text: https://medium.com/@valentyn.vasylenko/typewriter-effect-with-alternating-text-in-pure-css3-72cf0c7e6c5