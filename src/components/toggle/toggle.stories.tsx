import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './toggle';
import { colorVariant } from './toggle-variants';
import { within, expect, userEvent } from '@storybook/test';

const labelText = 'Toggle';
const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  args: {
    label: labelText,
    variant: 'primary',
    disabled: false,
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
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('combobox');
    const input = canvas.getByRole('checkbox');
    const label = canvas.getByText(labelText);

    expect(container).toHaveStyle({ cursor: 'pointer' });
    expect(label).toBeDefined();

    await userEvent.click(container);

    expect(input).toBeChecked();
  },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Destructive: Story = {
  args: { variant: 'destructive' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Checked: Story = {
  args: { checked: true },
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
