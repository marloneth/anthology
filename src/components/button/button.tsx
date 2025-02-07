import { ComponentProps } from 'react';
import clsx from 'clsx';
import styles from './button.module.css';

type ButtonProps = ComponentProps<'button'> & {
  variant: 'primary' | 'secondary' | 'destructive';
};

export const Button = ({ variant, className, ...props }: ButtonProps) => {
  const classes = clsx(styles.button, styles[variant], className);
  return <button {...props} className={classes} />;
};
