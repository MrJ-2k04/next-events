import EventList from "@/components/Events/EventList";
import EventsSearch from "@/components/Events/EventSearch";
import { getAllEvents } from "@/db";
import { useRouter } from "next/router";


function Events() {
    const events = getAllEvents();
    const router = useRouter();

    const handleEventSearch = (year, month) => {
        const path = `/events/${year}/${month}`;
        router.push(path);
    }

    return (<>
        <EventsSearch onSearch={handleEventSearch} />
        <EventList events={events} />
    </>);
}

export default Events;