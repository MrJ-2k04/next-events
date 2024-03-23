import EventContent from "@/components/EventDetails/EventContent";
import EventLogistics from "@/components/EventDetails/EventLogistics";
import EventSummary from "@/components/EventDetails/EventSummary";
import ErrorAlert from "@/components/Events/ErrorAlert";
import { getAllFeaturedEventIds, getEventById } from "@/helpers/api-utils";

function EventDetailsPage({ event }) {
    if (!event) {
        return <div className="center">
            <p>Loading...</p>
        </div>
    }

    return (<div>
        <EventSummary title={event.title} />
        <EventLogistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
        />
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
    </div>);
}

export async function getStaticProps(context) {
    const event = await getEventById(context.params.eventId)
    return {
        props: {
            event,
        },
        revalidate: 30
    }
}

export async function getStaticPaths() {
    const eventIds = await getAllFeaturedEventIds();

    return {
        paths: eventIds.map(eventId =>
            ({ params: { eventId } })
        ),
        fallback: true,
    }
}

export default EventDetailsPage;