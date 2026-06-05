import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,

  argTypes: {
    label: { control: 'text' },

    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
    },

    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },

    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },

    icon: { control: 'text' },

    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },

    backgroundColor: {
      control: 'color',
      description: 'Override button background color',
    },

    textColor: {
      control: 'color',
      description: 'Override button text color',
    },

    onClick: {
      action: 'button-clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const defaultButton: Story = {
  args: {
    label: 'Click Me',
    variant: 'primary',
    size: 'medium',
    icon: '☺️',
    iconPosition: 'left',
    disabled: false,
    loading: false,
    backgroundColor: undefined,
    textColor: undefined,
  },
};