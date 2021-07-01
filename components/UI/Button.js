import Link from 'next/link';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <Link href={props.link}>
      <a className={classes.btn} href=''>
        {props.children}
      </a>
    </Link>
    // if you want to apply a custom style with the Link component
    // you should create an anchor tag (<a></a>)
  );
};

export default Button;
