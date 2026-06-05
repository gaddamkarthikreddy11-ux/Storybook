import type { Meta, StoryObj } from "@storybook/react";
import Loader from "./Loader";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,

  argTypes: {
    type: {
      control: "select",
      options: [
        "spinner",
        "dots",
        "bars",
        "pulse",
        "ring",
        "gradient",
      ],
    },

    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },

    color: {
      control: "color",
    },

    text: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const DefaultLoader: Story = {
  args: {
    type: "spinner",
    size: "medium",
    color: "#2563eb",
    text: "Loading...",
  },
};