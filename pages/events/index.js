import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../helpers/api-helpers';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';

const EventsPage = (props) => {
  const router = useRouter();

  const findEventHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={props.events} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default EventsPage;
