import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

function ProductCard(props) {
  return (
    <Col>
      <Card style={{ width: '18rem' }} className='brown-bg'>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className='beige-text'>{props.name}</Card.Title>
          <Card.Text className='beige-text'>Make: {props.make}</Card.Text>
          <Card.Text className='beige-text'>Price: {props.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;