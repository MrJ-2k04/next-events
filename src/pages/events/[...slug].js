import ErrorAlert from "@/components/Events/ErrorAlert";
import EventList from "@/components/Events/EventList";
import ResultsTitle from "@/components/Events/ResultsTitle";
import Button from "@/components/UI/Button";
import { getFilteredEvents } from "@/db";
import { useRouter } from "next/router";

function FilteredEventsPage() {
    const { query } = useRouter();

    if (!query.slug) {
        return <p className="center">Loading...</p>
    }

    const year = parseInt(query.slug[0]);
    const month = parseInt(query.slug[1]);

    if (
        isNaN(year) || isNaN(month) ||
        year < 2021 || year > 2030 ||
        month < 1 || month > 12
    ) {
        return <>
            <ErrorAlert>
                <p>Invalid filter. Please adjust your values!</p>
            </ErrorAlert>
            <div className="center">
                <Button href={'/events'}>Show All Events</Button>
            </div>
        </>
    }

    const filteredEvents = getFilteredEvents({ year, month });
    if (!filteredEvents || filteredEvents.length === 0) {
        return <>
            <ErrorAlert>
                <p className="center">No events found for the chosen filter!</p>
            </ErrorAlert>
            <div className="center">
                <Button href={'/events'}>Show All Events</Button>
            </div>
        </>
    }

    const date = new Date(year, month - 1);

    return (
        <div>
            <ResultsTitle date={date} />
            <EventList events={filteredEvents} />
        </div>
    );
}

export default FilteredEventsPage;