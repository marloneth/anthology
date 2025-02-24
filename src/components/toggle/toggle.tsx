import { type ComponentProps } from 'react';
import { ToggleVariants, variants } from './toggle-variants';

type ToggleProps = ComponentProps<'input'> &
  ToggleVariants & {
    label: string;
  };

export const Toggle = ({ label, variant = 'primary', ...props }: ToggleProps) => {
  return (
    <label className="inline-flex cursor-pointer items-center" role="combobox">
      <input type="checkbox" className="peer sr-only" {...props} />
      <div className={variants({ variant })} />
      <span className="ml-3 text-sm font-medium">{label}</span>
    </label>
  );
};
