import Card from 'react-bootstrap/Card';
import classes from './InfoCard.module.css';

function InfoCard(props) {
    return (
        <Card className={classes.card} > 
            <Card.Body>
              <Card.Title>{props.Title}</Card.Title>
              <Card.Text>
                {props.Description}
              </Card.Text>
          </Card.Body>
        </Card>
    );
}

export default InfoCard;