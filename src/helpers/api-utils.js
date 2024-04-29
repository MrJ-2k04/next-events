import { DUMMY_EVENTS } from "@/db";


export async function getAllEvents() {
    // await new Promise(res => setTimeout(res, 1000));
    return DUMMY_EVENTS;
}

export async function getFeaturedEvents() {
    // await new Promise(res => setTimeout(res, 1000));
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
    // await new Promise(res => setTimeout(res, 1000));
    return DUMMY_EVENTS.find((event) => event.id === id);
}

export async function getAllFeaturedEventIds() {
    // await new Promise(res => setTimeout(res, 1000));
    return DUMMY_EVENTS.filter(event => event.isFeatured).map((event) => event.id);
}

export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
    
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
    
    // await new Promise(res => setTimeout(res, 1000));
    return filteredEvents;
}