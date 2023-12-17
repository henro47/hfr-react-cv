import classes from './Timeline.module.css';


function Timeline() {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <h1> A day in my 'sleepy' life 😅</h1>
                <ul class="sessions">
                <li>
                    <div class="time">09:00 AM</div>
                    <p>How is it already 9:00? Just how??? 🤯🤯</p>
                </li>
                </ul>
            </div>
        </div> 
    );
}

export default Timeline;