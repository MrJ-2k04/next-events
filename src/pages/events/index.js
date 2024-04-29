import EventList from "@/components/Events/EventList";
import EventsSearch from "@/components/Events/EventSearch";
import { getAllEvents } from "@/helpers/api-utils";
import Head from "next/head";

import { useRouter } from "next/router";


function Events({ events }) {
    const router = useRouter();

    const handleEventSearch = (year, month) => {
        const path = `/events/${year}/${month}`;
        router.push(path);
    }

    return (<>
        <Head>
            <title>Next Events</title>
        </Head>
        <EventsSearch onSearch={handleEventSearch} />
        <EventList events={events} />
    </>);
}

export async function getStaticProps(context) {
    const events = await getAllEvents();
    return {
        props: {
            events,
        },
        revalidate: 60,
    }
}

export default Events;