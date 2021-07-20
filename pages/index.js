import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helpers/api-helpers';

const HomePage = (props) => {
  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      featuredEvents: await getFeaturedEvents(),
    },
  };
}

export default HomePage;
