export async function getAllEvents() {
  const res = await fetch(
    'https://nextjs-course-33770-default-rtdb.firebaseio.com/events.json'
  );
  const data = await res.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const getEvents = await getAllEvents();
  return getEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const getEvents = await getAllEvents();
  return getEvents.find((event) => event.id === id);
}
