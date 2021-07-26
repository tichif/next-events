import Head from 'next/head';

import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name='description'
          content='Find a lot of great events that allows you evolve...'
        />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
