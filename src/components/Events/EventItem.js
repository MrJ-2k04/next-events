import Image from "next/image";
import Button from "../UI/Button";
import classes from './EventItem.module.css';
import Icon from "../UI/Icon";

function EventItem({
    id,
    title,
    image,
    date,
    location,
}) {

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedAddress = location.replace(', ', '\n');

    return (<li className={classes.item}>
        <Image src={`/${image}`} alt="Event Image" width={200} height={200} priority />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <Icon name={'event'} />
                    <time>{formattedDate}</time>
                </div>
                <div className={classes.address}>
                    <Icon name={'location_on'} />
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button href={'/events/' + id}>
                    Explore Events
                </Button>
            </div>
        </div>
    </li>);
}

export default EventItem;