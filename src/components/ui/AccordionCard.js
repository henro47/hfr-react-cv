import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import classes from './AccordionCard.module.css'

function AccordionCard(props) {
    return (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{props.Title}</Accordion.Header>
            <Accordion.Body>
                <Image src={props.ImgUrl} fluid></Image>
                <h5>{props.Subtitle}</h5>
                <div className={classes.description}>
                    {props.Description}
                </div>
                <br/>
                <div>
                    {props.Keywords}
                </div>
                <br/>
                <div className="d-grid gap-2">
                    <Button size="sm" href ={props.BtnUrl} target="blank">
                        {props.BtnTitle}
                    </Button>
                </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      );
}

export default AccordionCard;