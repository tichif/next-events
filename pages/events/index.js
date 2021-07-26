import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Header from 'next/head';

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
      <Header>
        <title>All Events</title>
        <meta
          name='description'
          content='Find a lot of great events that allows you evolve...'
        />
      </Header>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={allEvents} />
    </Fragment>
  );
};

export default EventsPage;
