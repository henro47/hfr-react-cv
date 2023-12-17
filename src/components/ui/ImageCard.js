import Card from 'react-bootstrap/Card';
import classes from './ImageCard.module.css'

function ImageCard(props) {
  return (
    <Card className={classes.card} > 
        <Card.Img variant={props.imgPos} src={props.imgUrl} />
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Text>
            {props.Description}
          </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;