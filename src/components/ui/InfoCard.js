import Card from 'react-bootstrap/Card';
import { BsInfoCircleFill, BsFileCodeFill, BsChatLeftDotsFill, BsAppIndicator, BsGithub, BsLinkedin } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import classes from './InfoCard.module.css';

function determineIco(props) {
  switch (props) {
    case "About me":
      return (
        <BsInfoCircleFill className={classes.ico}/>
      );
    case "Career":
      return (
        <BsFileCodeFill className={classes.ico}/>
      );
    case "Social":
      return (
        <BsChatLeftDotsFill className={classes.ico}/>
      );
    case "Github":
      return (
        <BsGithub className={classes.btnico}/>
      );
    case "LinkedIn":
      return (
        <BsLinkedin className={classes.btnico}/>
      );
    default: 
      return (
        <BsAppIndicator className={classes.ico}/>
      );
  }
}

function InfoCard(props) {
    return (
        <Card className={classes.card} > 
            <Card.Body>
              <Card.Title>{props.Title} {determineIco(props.Title)}</Card.Title>
              <Card.Text>
                {props.Description}
              </Card.Text>
              <div className="d-grid gap-2">
                {props.Buttons.map((item, i) => {
                  return (
                    <Button key={i} size="sm"
                      href={item.Href}
                      target="blank"
                      variant={item.BtnVariant}
                    >{item.BtnName}  {determineIco(item.BtnName)}</Button>  
                  );
                })}
              </div>
          </Card.Body>
        </Card>
    );
}

export default InfoCard;