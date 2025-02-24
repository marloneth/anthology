import clsx from 'clsx';
import { ComponentProps } from 'react';
import { variants, type CheckboxVariants } from './checkbox-variants';

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type'> &
  CheckboxVariants & {
    label: string;
  };

export const Checkbox = ({ label, variant = 'primary', className, ...props }: CheckboxProps) => {
  return (
    <label
      className={clsx(
        'inline-flex cursor-pointer select-none items-center gap-1.5',
        props.disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
      role="combobox"
    >
      <input type="checkbox" className="peer sr-only" {...props} />
      <div className={variants({ variant })} />
      <span className="text-sm font-medium">{label}</span>
    </label>
  );
};
