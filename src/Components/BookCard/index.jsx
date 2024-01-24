import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

function BookCard(props) {
  return (
    <Col>
      <Card style={{ width: '20rem' }} className='beige-bg mb-3'>
      <div className='square-image-container'>
          <Card.Img variant="top" src={props.img} alt={props.name}/>
        </div>
        <Card.Body>
          <Card.Title className='green-text'>{props.name}</Card.Title>
          <Card.Text className='green-text'>Author: {props.author}</Card.Text>
          <Card.Text className='green-text'>Publisher: {props.publisher}</Card.Text>
          <Card.Text className='green-text price'>Price: {props.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>

  );
}

export default BookCard;