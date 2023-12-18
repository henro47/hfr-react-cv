import Card from 'react-bootstrap/Card';
import { BsMailbox2Flag, BsFillTelephoneFill, BsPersonBoundingBox } from "react-icons/bs";
import classes from './ImageCard.module.css'

function ImageCard(props) {
  return (
    <Card className={classes.card} > 
        <Card.Img variant={props.ImgPos} src={props.ImgUrl}/>
        <Card.Body>
          <Card.Title>{props.Title}<BsPersonBoundingBox className={classes.ico}/></Card.Title>
          <Card.Text>
            <a href={props.PositionURL} className={classes.anchor} target='blank'>{props.Description}</a>
          </Card.Text>
          <a href={props.Cell.Href} className={classes.anchor} target='blank'><BsFillTelephoneFill className={classes.ico}/>{props.Cell.Title}</a>
          <br/>
          <a href={props.Email.Href} className={classes.anchor} target='blank'><BsMailbox2Flag className={classes.ico}/>{props.Email.Title}</a>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;