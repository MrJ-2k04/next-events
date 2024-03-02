import EventContent from "@/components/EventDetails/EventContent";
import EventLogistics from "@/components/EventDetails/EventLogistics";
import EventSummary from "@/components/EventDetails/EventSummary";
import ErrorAlert from "@/components/Events/ErrorAlert";
import { getEventById } from "@/db";
import { useRouter } from "next/router";

function EventDetailsPage() {
    const { query } = useRouter();

    const event = getEventById(query.eventId);
    if (!event) {
        return <ErrorAlert>
            <p>Event Not Found</p>
        </ErrorAlert>
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

export default EventDetailsPage;