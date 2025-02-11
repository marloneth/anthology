import type { ComponentProps, PropsWithChildren } from 'react';
import { CalloutVariants, variants } from './callout-variants';
import { Icon, IconProps } from '../icon';

type CalloutProps = PropsWithChildren<CalloutVariants & { title: string }>;

export const Callout = ({ variant = 'primary', title, children }: CalloutProps) => {
  const iconVariant: Record<NonNullable<CalloutVariants['variant']>, IconProps['type']> = {
    primary: 'pencil',
    success: 'success',
    danger: 'skull',
    information: 'info',
    warning: 'warning',
  };

  if (!variant) return;

  return (
    <div className={variants({ variant })}>
      <h2 className="mb-2 flex text-2xl font-bold">
        <Icon className="mr-2" type={iconVariant[variant]} /> {title}
      </h2>
      <p>{children}</p>
    </div>
  );
};
