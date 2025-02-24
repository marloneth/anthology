import { cva, type VariantProps } from 'class-variance-authority';

export type CheckboxVariants = VariantProps<typeof variants>;
export const colorVariant = {
  primary: [
    'peer-checked:border-primary-800',
    'peer-checked:bg-primary-600',
    'peer-focus:ring-primary-500',
    'dark:peer-checked:border-primary-600',
  ],
  secondary: [
    'peer-checked:border-secondary-800',
    'peer-checked:bg-secondary-600',
    'peer-focus:ring-secondary-500',
    'dark:peer-checked:border-secondary-600',
  ],
  destructive: [
    'peer-checked:border-danger-800',
    'peer-checked:bg-danger-600',
    'peer-focus:ring-danger-500',
    'dark:peer-checked:border-danger-600',
  ],
};

export const variants = cva(
  [
    'relative',
    'h-4',
    'w-4',
    'min-w-4',
    'rounded',
    'border',
    'border-slate-500',
    'bg-slate-50',
    'shadow-sm',
    'after:absolute',
    'after:left-0.5',
    'after:top-0',
    'after:text-xs',
    'after:text-white',
    'after:drop-shadow-sm',
    "peer-checked:after:content-['✔']",
    'peer-focus:ring-1',
    'peer-focus:ring-offset-2',
    'dark:bg-slate-700',
    'dark:ring-offset-slate-800',
  ],
  {
    variants: {
      variant: colorVariant,
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);
