import React from 'react'
import { Col, Image, Card } from 'react-bootstrap';


export default function CardMovie(props) {
  return (
      <Col md={4} className="movieWrapper" id="trending">
        <Card className="movieImage">
          <Image src={props.image} alt="Jurassic Movie" className="images" />
          <div className="bg-dark">
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">{props.title}</Card.Title>
              <Card.Text className="text-left">
                {props.description}
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </div>
          </div>
        </Card>
      </Col>
  );
}
