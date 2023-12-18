import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classes from './InfoCard.module.css';

function InfoCard(props) {
    return (
        <Card className={classes.card} > 
            <Card.Body>
              <Card.Title>{props.Title}</Card.Title>
              <Card.Text>
                {props.Description}
              </Card.Text>
              <div className="d-grid gap-2">
                {props.Buttons.map((item, i) => {
                  return (
                    <Button key={i} size="lg"
                      href={item.Href}
                      target="blank"
                      variant={item.BtnVariant}
                    >{item.BtnName}</Button>  
                  );
                })}
              </div>
          </Card.Body>
        </Card>
    );
}

export default InfoCard;