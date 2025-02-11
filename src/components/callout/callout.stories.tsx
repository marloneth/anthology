import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';
import { variations } from './callout-variants';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    title: 'An important title',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum porta elementum. Phasellus blandit risus vitae nunc viverra convallis. Ut ipsum augue, sagittis in massa a, semper tincidunt diam. Suspendisse ut elit tristique nunc accumsan lobortis. Quisque sit amet lorem maximus, pretium nulla ut, efficitur nisi. In at viverra velit. Maecenas sollicitudin feugiat pulvinar. In fringilla tortor at euismod pulvinar. Proin libero sapien, venenatis eget sollicitudin non, aliquet non leo.',
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
};

export const Success: Story = {
  args: { variant: 'success' },
};

export const Danger: Story = {
  args: { variant: 'danger' },
};

export const Information: Story = {
  args: { variant: 'information' },
};

export const Warning: Story = {
  args: { variant: 'warning' },
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
