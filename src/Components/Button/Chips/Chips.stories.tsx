import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chips';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chips',
  component: Chip,

  argTypes: {
    label: { control: 'text' },

    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'danger', 'outline', 'gradient'],
    },

    selected: { control: 'boolean' },

    icon: { control: 'text' },

    // avatar: { control: 'text' },

    onClick: { action: 'chip-clicked' },
    onDelete: { action: 'chip-deleted' },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const defaultChip: Story = {
  args: {
    label: 'Chip',
    variant: 'primary',
    icon: '🔥',
    selected: false,
  },
};