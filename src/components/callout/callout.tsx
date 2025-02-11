import type { ComponentProps } from 'react';
import { CalloutVariants, variants } from './callout-variants';
import { Icon, IconProps } from '../icon';

type CalloutProps = ComponentProps<'div'> &
  CalloutVariants & {
    title: string;
    content: string;
  };

export const Callout = ({ variant = 'primary', title, content, ...props }: CalloutProps) => {
  const iconVariant: Record<NonNullable<CalloutVariants['variant']>, IconProps['type']> = {
    primary: 'pencil',
    success: 'success',
    danger: 'skull',
    information: 'info',
    warning: 'warning',
  };

  if (!variant) return;

  return (
    <div {...props} className={variants({ variant })}>
      <h2 className="mb-2 flex items-center font-bold">
        <Icon className="mr-2" type={iconVariant[variant]} /> {title}
      </h2>
      <p>{content}</p>
    </div>
  );
};
