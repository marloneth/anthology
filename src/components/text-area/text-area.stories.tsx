import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './text-area';
import { userEvent, within, expect } from '@storybook/test';

const labelText = 'Text Area Label';
const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  args: {
    label: labelText,
    placeholder: 'Enter some text here…',
    disabled: false,
    required: false,
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label of the text area',
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder text of the text area',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the text area',
      table: {
        defaultValue: {
          //summary: false,
        },
      },
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Marks the text area as required',
      table: {
        defaultValue: {
          //summary: false,
        },
      },
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {},
};

export const WithCount: Story = {
  args: {
    maxLength: 140,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    const count = canvas.getByTestId('length');
    const inputValue = 'Hello, World!';

    await userEvent.type(textArea, inputValue);
    expect(count).toHaveTextContent(inputValue.length.toString());
  },
};

export const LengthTooLong: Story = {
  args: {
    maxLength: 140,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    const count = canvas.getByTestId('length');
    const inputValue = 'H' + 'e'.repeat(140) + 'y!';

    await userEvent.type(textArea, inputValue);
    expect(textArea).toHaveAttribute('aria-invalid', 'true');
    expect(textArea).toHaveClass('ring-danger-500');
    expect(count).toHaveStyle({ color: 'rgb(246, 118, 127)' });
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    const inputValue = 'trying to type something';

    expect(textArea).toBeDisabled();
    expect(textArea).toHaveDisplayValue('');
    await userEvent.type(textArea, inputValue);
    expect(textArea).toHaveDisplayValue('');
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');

    expect(textArea).toBeRequired();
  },
};

export const LabeledCorrectly: Story = {
  args: {
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByLabelText(labelText);

    expect(label).toBeDefined();
  },
};
