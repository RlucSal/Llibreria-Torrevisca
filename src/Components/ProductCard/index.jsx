import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import "../../app.css"

function ProductCard(props) {
  return (
    <Col className='mb-3'>
      <Card style={{ width: '20rem' }} className='beige-bg'>
        <div className='square-image-container'>
          <Card.Img variant="top" src={props.img} alt={props.name}/>
        </div>
        <Card.Body>
          <Card.Title className='green-text'>{props.name}</Card.Title>
          <Card.Text className='green-text'>Make: {props.make}</Card.Text>
          <Card.Text className='green-text price'>Price: {props.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard; 