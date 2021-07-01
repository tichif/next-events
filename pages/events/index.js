import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';

const EventsPage = () => {
  const allEvents = getAllEvents();

  const router = useRouter();

  const findEventHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={allEvents} />
    </Fragment>
  );
};

export default EventsPage;
