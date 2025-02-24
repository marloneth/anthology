import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { expect, userEvent, within } from '@storybook/test';
import { white } from '../../tokens/colors';

const labelText = 'Input';
const placeholderText = 'Enter text';
const typingText = 'Typing other thing';
const meta = {
  title: 'Components/Input',
  component: Input,
  args: {
    label: labelText,
    placeholder: placeholderText,
    disabled: false,
    required: false,
    unlabeled: false,
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label of the input',
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder text of the input',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the input',
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Marks the input as required',
    },
    unlabeled: {
      name: 'Unlabeled',
      control: 'boolean',
      description: 'Gives the possibility of show or not the input label',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Simple: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText(labelText);
    const input = canvas.getByPlaceholderText(placeholderText);

    expect(label).toBeDefined();
    expect(label).toHaveStyle({ color: '#000' });
    expect(input).toBeDefined();
    expect(input).toBeEnabled();
    expect(input).not.toBeRequired();
    expect(input).toHaveValue('');

    await userEvent.click(input);
    await userEvent.type(input, typingText);

    expect(input).toHaveValue(typingText);
  },
};

export const Unlabeled: Story = {
  args: { unlabeled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText(labelText);
    const input = canvas.getByPlaceholderText(labelText);

    expect(label).toBeDefined();
    expect(label).toHaveStyle({ overflow: 'hidden' });
    expect(input).toBeDefined();
    expect(input).toBeEnabled();
    expect(input).not.toBeRequired();
    expect(input).toHaveValue('');

    await userEvent.click(input);
    await userEvent.type(input, typingText);

    expect(input).toHaveValue(typingText);
  },
};

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText(labelText);
    const input = canvas.getByPlaceholderText(placeholderText);

    expect(label).toBeDefined();
    expect(label).toHaveStyle({ color: '#000' });
    expect(input).toBeDefined();
    expect(input).toBeDisabled();
    expect(input).not.toBeRequired();
    expect(input).toHaveValue('');

    await userEvent.click(input);
    await userEvent.type(input, typingText);

    expect(input).toHaveValue('');
  },
};

export const Required: Story = {
  args: { required: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText(labelText);
    const input = canvas.getByPlaceholderText(placeholderText);

    expect(label).toBeDefined();
    expect(label).toHaveStyle({ color: '#000' });
    expect(input).toBeDefined();
    expect(input).toBeEnabled();
    expect(input).toBeRequired();
    expect(input).toHaveValue('');

    await userEvent.click(input);
    await userEvent.type(input, typingText);

    expect(input).toHaveValue(typingText);
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
    const label = canvas.getByText(labelText);
    const input = canvas.getByPlaceholderText(placeholderText);

    expect(label).toBeDefined();
    expect(label).toHaveStyle({ color: white });
    expect(input).toBeDefined();
    expect(input).toBeEnabled();
    expect(input).not.toBeRequired();
    expect(input).toHaveValue('');

    await userEvent.click(input);
    await userEvent.type(input, typingText);

    expect(input).toHaveValue(typingText);
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
    const label = canvas.getByText(labelText);
    const input = canvas.getByPlaceholderText(placeholderText);

    expect(label).toBeDefined();
    expect(label).toHaveStyle({ color: '#000' });
    expect(input).toBeDefined();
    expect(input).toBeEnabled();
    expect(input).not.toBeRequired();
    expect(input).toHaveValue('');

    await userEvent.click(input);
    await userEvent.type(input, typingText);

    expect(input).toHaveValue(typingText);
  },
};
