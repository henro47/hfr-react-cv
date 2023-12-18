import classes from './Timeline.module.css';
import Card from 'react-bootstrap/Card';
import { BsMapFill, BsJournalBookmarkFill, BsFillPencilFill, BsAppIndicator, BsClipboard2PlusFill, BsFillBarChartFill, BsFillSuitcaseLgFill  } from "react-icons/bs";

function determineIco(props) {
    switch (props) {
      case "2017":
        return (
          <BsFillPencilFill className={classes.btnico}/>
        );
      case "2018-2020":
        return (
          <BsJournalBookmarkFill className={classes.btnico}/>
        );
      case "2021":
        return (
          <BsClipboard2PlusFill className={classes.btnico}/>
        );
      case "2022-2023":
        return (
          <BsFillBarChartFill className={classes.btnico}/>
        );
      case "2023-Present":
        return (
          <BsFillSuitcaseLgFill className={classes.btnico}/>
        );
      default: 
        return (
          <BsAppIndicator className={classes.btnico}/>
        );
    }
  }
  

function Timeline(props) {
    console.log(props)
    return (
        <Card className={classes.card}>
            <Card.Body>
                <Card.Title>{props.Timeline.Title} <BsMapFill className={classes.ico}/></Card.Title>
                <Card.Text>
                    <ul>
                        {props.Timeline.Dates.map((item, i) => {
                        return (
                            <li key={i}>
                                <div className={classes.time}>{item.Date} {determineIco(item.Date)}</div>
                                <p>{item.Title}</p>
                                <p>{item.Description}</p>
                            </li>
                        );
                        })}
                    </ul>   
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Timeline;