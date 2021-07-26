import Head from 'next/head';

import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helpers/api-helpers';

const HomePage = (props) => {
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

export async function getStaticProps() {
  return {
    props: {
      featuredEvents: await getFeaturedEvents(),
    },
    revalidate: 1800,
  };
}

export default HomePage;
