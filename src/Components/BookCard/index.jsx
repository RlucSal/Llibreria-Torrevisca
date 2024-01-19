import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

function BookCard(props) {
  return (
    <Col>
      <Card style={{ width: '18rem' }} className='beige-bg'>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className='brown-text'>{props.name}</Card.Title>
          <Card.Text className='brown-text'>
            <h4>Author: {props.author}</h4>
            <h4>Publisher: {props.publisher}</h4>
            <h4>Price: {props.price}</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

  );
}

export default BookCard;