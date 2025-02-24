import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import { expect, userEvent, within } from '@storybook/test';
import { colors } from '../../tokens/colors';
import { colorVariant } from './checkbox-variants';

const labelText = 'Checkbox';
const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    label: labelText,
    variant: 'primary',
    disabled: false,
    checked: true,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(colorVariant),
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: { variant: 'primary' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('combobox');
    const input = canvas.getByRole('checkbox');
    const [visual, label] = canvas.getAllByRole('generic');

    expect(container).toHaveStyle({ cursor: 'pointer' });
    expect(label).toHaveTextContent(labelText);

    await userEvent.click(input);

    expect(input).toBeChecked();
    expect(visual).toHaveStyle({
      borderColor: colors.primary['800'],
      backgroundColor: colors.primary['600'],
    });
  },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('combobox');
    const input = canvas.getByRole('checkbox');
    const [visual, label] = canvas.getAllByRole('generic');

    expect(container).toHaveStyle({ cursor: 'pointer' });
    expect(label).toHaveTextContent(labelText);

    await userEvent.click(input);

    expect(input).toBeChecked();
    expect(visual).toHaveStyle({
      borderColor: colors.secondary['800'],
      backgroundColor: colors.secondary['600'],
    });
  },
};

export const Destructive: Story = {
  args: { variant: 'destructive' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('combobox');
    const input = canvas.getByRole('checkbox');
    const [visual, label] = canvas.getAllByRole('generic');

    expect(container).toHaveStyle({ cursor: 'pointer' });
    expect(label).toHaveTextContent(labelText);

    await userEvent.click(input);

    expect(input).toBeChecked();
    expect(visual).toHaveStyle({
      borderColor: colors.danger['800'],
      backgroundColor: colors.danger['600'],
    });
  },
};

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('combobox');
    const input = canvas.getByRole('checkbox');
    const [visual, label] = canvas.getAllByRole('generic');

    expect(container).toHaveStyle({ cursor: 'pointer' });
    expect(label).toHaveTextContent(labelText);
    expect(input).toBeDisabled();

    await userEvent.click(input);

    expect(input).not.toBeChecked();
    expect(visual).toHaveStyle({
      borderColor: colors.danger['800'],
      backgroundColor: colors.danger['600'],
    });
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
