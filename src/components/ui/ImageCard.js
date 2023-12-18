import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsChatRightTextFill } from "react-icons/bs";
import classes from './ImageCard.module.css'

function ImageCard(props) {
  return (
    <Card className={classes.card} > 
        <Card.Img variant={props.ImgPos} src={props.ImgUrl} />
        <Card.Body>
          <Card.Title>{props.Title} <BsChatRightTextFill /></Card.Title>
          <Card.Text>
            {props.Description}
          </Card.Text>
          <Button variant="primary">Contact Me</Button>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;