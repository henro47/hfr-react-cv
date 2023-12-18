import { BsFillFloppy2Fill, BsFillCloudDownloadFill  } from "react-icons/bs";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import classes from './AccordionCard.module.css'

function AccordionCard(props) {
    return (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{props.Title} <BsFillFloppy2Fill className={classes.ico}/></Accordion.Header>
            <Accordion.Body>
                <Image src={props.ImgUrl} fluid></Image>
                <h5>{props.Subtitle}</h5>
                <h6>{props.Abstract}</h6>
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
                        {props.BtnTitle} <BsFillCloudDownloadFill className={classes.btnico}/>
                    </Button>
                </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      );
}

export default AccordionCard;