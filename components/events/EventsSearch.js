import { useRef } from 'react';

import classes from './EventsSearch.module.css';
import Button from '../ui/Button';

const EventsSearch = (props) => {
  const yearRef = useRef();
  const monthRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };
  const monthArray = [
    {
      value: '1',
      text: 'January',
    },
    {
      value: '2',
      text: 'February',
    },
    {
      value: '3',
      text: 'March',
    },
    {
      value: '4',
      text: 'April',
    },
    {
      value: '5',
      text: 'May',
    },
    {
      value: '6',
      text: 'June',
    },
    {
      value: '7',
      text: 'July',
    },
    {
      value: '8',
      text: 'August',
    },
    {
      value: '9',
      text: 'September',
    },
    {
      value: '10',
      text: 'October',
    },
    {
      value: '11',
      text: 'November',
    },
    {
      value: '12',
      text: 'December',
    },
  ];
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'>Year</label>
          <select id='year' ref={yearRef}>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='month'>Month</label>
          <select id='month' ref={monthRef}>
            {monthArray.map((item) => (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Search</Button>
    </form>
  );
};

export default EventsSearch;
