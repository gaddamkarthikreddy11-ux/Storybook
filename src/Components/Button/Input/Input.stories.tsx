import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,

  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "search"],
    },
    showDropdown: {
      control: "boolean",
    },
    showButton: {
      control: "boolean",
    },
    buttonText: {
      control: "text",
    },
    label: {
      control: "text",
    },

    
    onSubmit: { action: "submitted" },
  },
};




export default meta;

type Story = StoryObj<typeof Input>;

export const defaultInput: Story = {
  args: {
    label: "Search",
    placeholder: "Enter value",
    showDropdown: true,
    showButton: true,
    buttonText: "Search",
    options: [
      { label: "All", value: "all" },
      { label: "Users", value: "users" },
      { label: "Products", value: "products" },
    ],
  },
};

export const OnlyInput: Story = {
  args: {
    placeholder: "Simple input",
  },
};

export const WithDropdown: Story = {
  args: {
    showDropdown: true,
    options: [
      { label: "India", value: "IN" },
      { label: "USA", value: "US" },
    ],
  },
};

export const WithButton: Story = {
  args: {
    showButton: true,
    buttonText: "Submit",
  },
};