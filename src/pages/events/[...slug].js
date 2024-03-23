import ErrorAlert from "@/components/Events/ErrorAlert";
import EventList from "@/components/Events/EventList";
import ResultsTitle from "@/components/Events/ResultsTitle";
import Button from "@/components/UI/Button";
import { getFilteredEvents } from "@/helpers/api-utils";

function FilteredEventsPage({ events, date, hasError }) {
    // const { query } = useRouter();

    // if (!query.slug) {
    //     return <p className="center">Loading...</p>
    // }

    // const year = parseInt(query.slug[0]);
    // const month = parseInt(query.slug[1]);

    if (hasError) {
        return <>
            <ErrorAlert>
                <p>Invalid filter. Please adjust your values!</p>
            </ErrorAlert>
            <div className="center">
                <Button href={'/events'}>Show All Events</Button>
            </div>
        </>
    }


    if (!events || events.length === 0) {
        return <>
            <ErrorAlert>
                <p className="center">No events found for the chosen filter!</p>
            </ErrorAlert>
            <div className="center">
                <Button href={'/events'}>Show All Events</Button>
            </div>
        </>
    }

    return (
        <div>
            <ResultsTitle date={new Date(date.year, date.month - 1)} />
            <EventList events={events} />
        </div>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;
    const slug = params.slug;

    const year = parseInt(slug[0]);
    const month = parseInt(slug[1]);

    if (
        isNaN(year) || isNaN(month) ||
        year < 2021 || year > 2030 ||
        month < 1 || month > 12
    ) {
        return {
            props: {
                hasError: true,
            }
        }
    }
    const filteredEvents = await getFilteredEvents({ year, month });

    return {
        props: {
            events: filteredEvents,
            date: { year, month },
        }
    }
}

export default FilteredEventsPage;