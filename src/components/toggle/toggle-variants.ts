import { cva, VariantProps } from 'class-variance-authority';

export type ToggleVariants = VariantProps<typeof variants>;
export const colorVariant = {
  primary: ['peer-checked:bg-primary-600', 'peer-focus:ring-primary-600'],
  secondary: ['peer-checked:bg-secondary-600', 'peer-focus:ring-secondary-600'],
  destructive: ['peer-checked:bg-danger-600', 'peer-focus:ring-danger-600'],
};

export const variants = cva(
  [
    'pointer-events-none',
    'relative',
    'h-6',
    'w-11',
    'rounded-full',
    'bg-slate-300',
    'ring-offset-slate-50',
    'after:absolute',
    'after:left-[2px]',
    'after:top-[2px]',
    'after:h-5',
    'after:w-5',
    'after:rounded-full',
    'after:bg-white',
    'after:transition-all',
    "after:content-['']",
    'peer-checked:after:translate-x-full',
    'peer-focus:outline-none',
    'peer-focus:ring-2',
    'peer-focus:ring-offset-2',
    'dark:bg-slate-700',
    'dark:ring-offset-slate-900',
  ],
  {
    variants: {
      variant: colorVariant,
    },
  },
);
