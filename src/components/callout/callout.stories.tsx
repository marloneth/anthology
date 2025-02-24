import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';
import { variations } from './callout-variants';
import { expect, within } from '@storybook/test';
import { colors } from '../../tokens/colors';

const title = 'An important title';
const children =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum porta elementum. Phasellus blandit risus vitae nunc viverra convallis. Ut ipsum augue, sagittis in massa a, semper tincidunt diam. Suspendisse ut elit tristique nunc accumsan lobortis. Quisque sit amet lorem maximus, pretium nulla ut, efficitur nisi. In at viverra velit. Maecenas sollicitudin feugiat pulvinar. In fringilla tortor at euismod pulvinar. Proin libero sapien, venenatis eget sollicitudin non, aliquet non leo.';
const meta = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    title,
    children,
    variant: 'primary',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: variations,
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof Callout>;

export const Primary: Story = {
  args: { variant: 'primary' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const callout = canvas.getByRole('generic');
    const icon = canvas.getByRole('img');
    const titleElement = canvas.getByRole('heading');
    const childrenElement = canvas.getByRole('contentinfo');

    expect(icon).toHaveClass('lucide-pencil');
    expect(titleElement).toHaveTextContent(title);
    expect(childrenElement).toHaveTextContent(children);
    expect(callout).toHaveStyle({
      backgroundColor: colors.primary['200'],
      borderColor: colors.primary['500'],
      color: colors.primary['900'],
    });
  },
};

export const Success: Story = {
  args: { variant: 'success' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const callout = canvas.getByRole('generic');
    const icon = canvas.getByRole('img');
    const titleElement = canvas.getByRole('heading');
    const childrenElement = canvas.getByRole('contentinfo');

    expect(icon).toHaveClass('lucide-circle-check');
    expect(titleElement).toHaveTextContent(title);
    expect(childrenElement).toHaveTextContent(children);
    expect(callout).toHaveStyle({
      backgroundColor: colors.success['200'],
      borderColor: colors.success['500'],
      color: colors.success['900'],
    });
  },
};

export const Danger: Story = {
  args: { variant: 'danger' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const callout = canvas.getByRole('generic');
    const icon = canvas.getByRole('img');
    const titleElement = canvas.getByRole('heading');
    const childrenElement = canvas.getByRole('contentinfo');

    expect(icon).toHaveClass('lucide-skull');
    expect(titleElement).toHaveTextContent(title);
    expect(childrenElement).toHaveTextContent(children);
    expect(callout).toHaveStyle({
      backgroundColor: colors.danger['200'],
      borderColor: colors.danger['500'],
      color: colors.danger['900'],
    });
  },
};

export const Information: Story = {
  args: { variant: 'information' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const callout = canvas.getByRole('generic');
    const icon = canvas.getByRole('img');
    const titleElement = canvas.getByRole('heading');
    const childrenElement = canvas.getByRole('contentinfo');

    expect(icon).toHaveClass('lucide-info');
    expect(titleElement).toHaveTextContent(title);
    expect(childrenElement).toHaveTextContent(children);
    expect(callout).toHaveStyle({
      backgroundColor: colors.information['200'],
      borderColor: colors.information['500'],
      color: colors.information['900'],
    });
  },
};

export const Warning: Story = {
  args: { variant: 'warning' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const callout = canvas.getByRole('generic');
    const icon = canvas.getByRole('img');
    const titleElement = canvas.getByRole('heading');
    const childrenElement = canvas.getByRole('contentinfo');

    expect(icon).toHaveClass('lucide-triangle-alert');
    expect(titleElement).toHaveTextContent(title);
    expect(childrenElement).toHaveTextContent(children);
    expect(callout).toHaveStyle({
      backgroundColor: colors.warning['200'],
      borderColor: colors.warning['500'],
      color: colors.warning['900'],
    });
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
    const callout = canvas.getByRole('generic');
    const icon = canvas.getByRole('img');
    const titleElement = canvas.getByRole('heading');
    const childrenElement = canvas.getByRole('contentinfo');

    expect(icon).toHaveClass('lucide-pencil');
    expect(titleElement).toHaveTextContent(title);
    expect(childrenElement).toHaveTextContent(children);
    expect(callout).toHaveStyle({
      backgroundColor: colors.primary['800'],
      borderColor: colors.primary['900'],
      color: colors.primary['50'],
    });
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
    const callout = canvas.getByRole('generic');
    const icon = canvas.getByRole('img');
    const titleElement = canvas.getByRole('heading');
    const childrenElement = canvas.getByRole('contentinfo');

    expect(icon).toHaveClass('lucide-pencil');
    expect(titleElement).toHaveTextContent(title);
    expect(childrenElement).toHaveTextContent(children);
    expect(callout).toHaveStyle({
      backgroundColor: colors.primary['200'],
      borderColor: colors.primary['500'],
      color: colors.primary['900'],
    });
  },
};
