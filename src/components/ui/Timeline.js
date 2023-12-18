import classes from './Timeline.module.css';
import Card from 'react-bootstrap/Card';

function Timeline(props) {
    console.log(props)
    return (
        <Card className={classes.card}>
            <Card.Body>
                <Card.Title>{props.Timeline.Title}</Card.Title>
                <Card.Text>
                    <ul>
                        {props.Timeline.Dates.map((item, i) => {
                        return (
                            <li key={i}>
                                <div className={classes.time}>{item.Date}</div>
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