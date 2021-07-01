import Link from 'next/link';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>NextEvents</Link>
      </div>
      <nav>
        <ul>
          <li className={classes.navigation}>
            <Link href='/events'>All events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
