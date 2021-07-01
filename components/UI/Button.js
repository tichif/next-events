import Link from 'next/link';

import classes from './Button.module.css';

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
      // if you want to apply a custom style with the Link component
      // you should create an anchor tag (<a></a>)
    );
  }
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
