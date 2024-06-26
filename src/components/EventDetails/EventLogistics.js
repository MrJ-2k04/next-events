import Image from "next/image";
import Icon from "../UI/Icon";
import classes from "./EventLogistics.module.css"
import LogisticsItem from "./LogisticsItem";

function EventLogistics( { date, address, image, imageAlt }) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width={640} height={640} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={<Icon name={'event'} />}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={<Icon name={'location_on'} />}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
