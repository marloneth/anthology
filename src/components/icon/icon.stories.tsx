import { Meta, StoryObj } from '@storybook/react';
import { Icon, icons } from './icon';
import { colors } from '../../tokens/colors';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  args: {
    type: 'bug',
    size: 32,
    color: colors.primary['600'],
  },
  argTypes: {
    type: {
      control: 'select',
      options: icons,
    },
    size: {
      control: { type: 'number', min: 12, max: 64, step: 4 },
    },
    color: {
      control: { type: 'color' },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Example: Story = {
  args: { type: 'bug' },
};

export const AllIcons = () => {
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {icons.map((icon) => (
        <div key={icon} style={{ textAlign: 'center' }}>
          <Icon type={icon} size={32} color={colors.primary['600']} />
          <p style={{ fontSize: '12px' }}>{icon}</p>
        </div>
      ))}
    </div>
  );
};
