import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { expect, fn, userEvent, within } from '@storybook/test';
import { colors, white } from '../../tokens/colors';

const handleOnClick = fn();
const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    onClick: handleOnClick,
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'text',
      description: 'Text to display on the button',
      table: {
        disable: true,
      },
    },
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: 'primary' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    expect(button).toBeEnabled();
    expect(button).toHaveClass('text-sm', 'px-2.5', 'py-1.5');
    expect(button).toHaveStyle({
      backgroundColor: colors.primary['600'],
      color: white,
    });

    await userEvent.click(button);
    expect(handleOnClick).toBeCalledTimes(1);
    handleOnClick.mockReset();
  },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    expect(button).toBeEnabled();
    expect(button).toHaveClass('text-sm', 'px-2.5', 'py-1.5');
    expect(button).toHaveStyle({
      backgroundColor: white,
      color: colors.slate['900'],
    });

    await userEvent.click(button);
    expect(handleOnClick).toBeCalledTimes(1);
    handleOnClick.mockReset();
  },
};

export const Destructive: Story = {
  args: { variant: 'destructive' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    expect(button).toBeEnabled();
    expect(button).toHaveClass('text-sm', 'px-2.5', 'py-1.5');
    expect(button).toHaveStyle({
      backgroundColor: colors.danger['600'],
      color: white,
    });

    await userEvent.click(button);
    expect(handleOnClick).toBeCalledTimes(1);
    handleOnClick.mockReset();
  },
};

export const Small: Story = {
  args: { size: 'small' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    expect(button).toBeEnabled();
    expect(button).toHaveClass('text-sm', 'px-2', 'py-1');
    expect(button).toHaveStyle({
      backgroundColor: colors.primary['600'],
      color: white,
    });

    await userEvent.click(button);
    expect(handleOnClick).toBeCalledTimes(1);
    handleOnClick.mockReset();
  },
};

export const Medium: Story = {
  args: { size: 'medium' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    expect(button).toBeEnabled();
    expect(button).toHaveClass('text-sm', 'px-2.5', 'py-1.5');
    expect(button).toHaveStyle({
      backgroundColor: colors.primary['600'],
      color: white,
    });

    await userEvent.click(button);
    expect(handleOnClick).toBeCalledTimes(1);
    handleOnClick.mockReset();
  },
};

export const Large: Story = {
  args: { size: 'large' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    expect(button).toBeEnabled();
    expect(button).toHaveClass('text-sm', 'px-3', 'py-2');
    expect(button).toHaveStyle({
      backgroundColor: colors.primary['600'],
      color: white,
    });

    await userEvent.click(button);
    expect(handleOnClick).toBeCalledTimes(1);
    handleOnClick.mockReset();
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    expect(button).toBeEnabled();
    expect(button).toHaveClass('text-sm', 'px-2.5', 'py-1.5');
    expect(button).toHaveStyle({
      backgroundColor: colors.primary['500'],
      color: white,
    });

    await userEvent.click(button);
    expect(handleOnClick).toBeCalledTimes(1);
    handleOnClick.mockReset();
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    expect(button).toBeEnabled();
    expect(button).toHaveClass('text-sm', 'px-2.5', 'py-1.5');
    expect(button).toHaveStyle({
      backgroundColor: colors.primary['600'],
      color: white,
    });

    await userEvent.click(button);
    expect(handleOnClick).toBeCalledTimes(1);
    handleOnClick.mockReset();
  },
};
