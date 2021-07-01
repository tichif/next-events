import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import Button from '../../components/UI/Button';
import ErrorAlert from '../../components/UI/ErrorAlert';

const FilteredEventsPage = () => {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className='center'>Loading...</p>;
  }

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filtered. Please correct your values</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show all events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ResultsTitle date={new Date(filteredYear, filteredMonth - 1)} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEventsPage;
