import classes from './Timeline.module.css';

function Timeline(props) {
    console.log(props)
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <h4>{props.Timeline.Title}</h4>
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
            </div>
        </div>
    );
}

export default Timeline;