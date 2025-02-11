import { cva, type VariantProps } from 'class-variance-authority';

export type ButtonVariants = VariantProps<typeof variants>;
export const variants = cva(
  ['font-semibold', 'border', 'rounded', 'shadow-sm', 'inline-flex', 'gap-1.5'],
  {
    variants: {
      variant: {
        primary: ['bg-primary-600', 'text-white'],
        success: [
          'bg-white',
          'text-slate-900',
          'border-slate-300',
          'hover:bg-slate-50',
          'active:bg-slate-100',
        ],
        danger: [
          'bg-danger-600',
          'text-white',
          'border-transparent',
          'hover:bg-danger-500',
          'active:bg-danger-400',
        ],
      },
      size: {
        small: ['text-sm', 'px-2', 'py-1'],
        medium: ['text-sm', 'px-2.5', 'py-1.5'],
        large: ['text-sm', 'px-3', 'py-2'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  },
);
