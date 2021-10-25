import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './SongCard.css';

const SongCard = props => {

    const renderCard = (card, index) => {
        return (
          <Card style={{ width: "18rem" }} key={index} className="box">
            <Link to={`/songs/${index}`} style={{textDecoration: "none"}}>
              <Card.Img variant="top" src={card.cover} className="image" />
              <Card.Body>
                <Card.Title>{card.artist}</Card.Title>
                <Card.Text>{card.name}</Card.Text>
              </Card.Body>
            </Link>
          </Card>
        );
      };

    return (
        <div className="grid">
            {props.item && props.item.map(renderCard)}
        </div>
    );
}

export default SongCard;