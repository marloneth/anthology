import type { PropsWithChildren } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

type CalloutProps = {
  variant: 'primary' | 'success' | 'danger' | 'information' | 'warning';
  title: string;
  content: string;
};

export const Callout = ({ variant, title, content }: CalloutProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};
