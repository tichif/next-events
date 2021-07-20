import { Fragment } from 'react';

import { getEventById, getAllEvents } from '../../helpers/api-helpers';
import EventSummary from '../../components/eventDetail/EventSummary';
import EventLogistics from '../../components/eventDetail/EventLogistics';
import EventContent from '../../components/eventDetail/EventContent';
import ErrorAlert from '../../components/UI/ErrorAlert';

const EventDetailPage = (props) => {
  if (!props.event) {
    return (
      <ErrorAlert>
        <p>No event found</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={props.event.title} />
      <EventLogistics
        date={props.event.date}
        address={props.event.location}
        image={props.event.image}
        imageAlt={props.event.title}
      />
      <EventContent>
        <p>{props.event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const { params } = context;

  const eventId = params.eventId;

  return {
    props: {
      event: await getEventById(eventId),
    },
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: false,
  };
}

export default EventDetailPage;
