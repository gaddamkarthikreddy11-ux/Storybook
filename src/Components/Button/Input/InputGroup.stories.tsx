import type { Meta, StoryObj } from "@storybook/react";
import InputGroup from "./InputGroup";

const meta: Meta<typeof InputGroup> = {
  title: "Components/InputGroup",
  component: InputGroup,



  argTypes: {
    showDropdown: { control: "boolean" },
    showButton: { control: "boolean" },
    showRadio: { control: "boolean" },

    
    inputVariant: {
      control: "select",
      options: [
        "text",
        "password",
        "email",
        "search",
        "textarea",
      ],
    },

    onSubmit: { action: "submitted" },
  },
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const DefaultInput: Story = {
  args: {
    showDropdown: true,
    showRadio: true,
    showButton: true,
    inputVariant: "text",

    options: [
      { label: "Users", value: "users" },
      { label: "Products", value: "products" },
    ],

    radioOptions: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],

  

    
  },
};

export const InputOnly: Story = {
  args: {
    showDropdown: false,
    showRadio: false,
    showButton: false,
    inputVariant: "text",
  },
};

// export const RadioOnly: Story = {
//   args: {
//     showDropdown: false,
//     showRadio: true,
//     showButton: false,
//     radioOptions: radioOptionsData, // ✅ USED
//   },
// };

// export const DropdownOnly: Story = {
//   args: {
//     showDropdown: true,
//     showRadio: false,
//     showButton: false,
//     options: dropdownOptions, // ✅ USED
//   },
// };

export const ButtonOnly: Story = {
  args: {
    showDropdown: false,
    showRadio: false,
    showButton: true,
  },
};

