import React from 'react';
import styles from './styles.module.scss'

type Props = {
  isPurple: boolean;
  title: string;
  small: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
};

const CustomButton: React.FC<Props> = props => {
  // console.log(props, '00000');
  if (!props.isPurple)
    return (
      <button onClick={props.onClick} className={styles.black} type={props.type ? props.type : 'button'}>
        {props.title}
      </button>
    );
  else
    return (
      <button
        onClick={props.onClick}
        className={styles.small ? styles.smallPurple : styles.purple}
        type={props.type ? props.type : 'button'}>
        {props.title}
      </button>
    );
};

export default CustomButton;