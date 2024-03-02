import EventItem from "./EventItem";
import classes from './EventList.module.css'

function EventList({ events }) {
    return (<ul className={classes.list}>
        {events.map(event => <EventItem {...event} key={event.id} />)}
    </ul>);
}

export default EventList;