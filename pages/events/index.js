import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';

const EventsPage = () => {
  const allEvents = getAllEvents();

  return (
    <div>
      <EventList items={allEvents} />
    </div>
  );
};

export default EventsPage;
