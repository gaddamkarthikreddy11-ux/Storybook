import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    image: { control: 'file' },
  },
};

export const Default = {
  args: {
    title: 'Card Title',
    description: 'Sample description',
    image: '',

  },
};