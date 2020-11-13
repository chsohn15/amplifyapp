import React from 'react';
import Card from 'react-bootstrap/Card'
//import sanitizeHtml from 'sanitize-html';

const BlogCard = (props) => {

console.log(props.blog)

const { title, thumbnail, content, link } = props.blog

let pTag = content.search('<p>')
let stringStart = pTag + 3

const preview = content.slice(stringStart, stringStart + 150)
let imgSrc 
if (thumbnail){
    imgSrc = thumbnail
}
else{
    imgSrc = "https://centaur-wp.s3.eu-central-1.amazonaws.com/marketingweek/prod/content/uploads/2017/05/12103909/Coding-body-image-.jpg?auto=compress,format&q=60&w=750&h=460"
}

return(
    <Card className="blog-card">
        <Card.Img variant="top" src={imgSrc}/> 
        <Card.Body>
            <a href={link} style={{display: "table-cell"}} target = "_blank" rel = "noopener noreferrer">
                <Card.Title style={{color: 'black'}}>{title}</Card.Title>
            </a>
            <Card.Text>
            {preview + "..."}
                <a href={link} style={{display: "table-cell"}} target = "_blank" rel = "noopener noreferrer">more</a>
            </Card.Text>
        </Card.Body>
  </Card>
    )
}

export default BlogCard
