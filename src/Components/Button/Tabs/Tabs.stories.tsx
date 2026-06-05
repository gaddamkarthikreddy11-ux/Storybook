import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,

  argTypes: {
    type: {
      control: "select",
      options: [
        "underline",
        "pill",
        "box",
        "gradient",
        "glass",
        "vertical",
      ],
    },

    // ✅ COLOR CONTROLS
    bgColor: { control: "color" },
    tabBgColor: { control: "color" },
    activeColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const tabsData = [
  {
    label: "Home",
    content: "Welcome to homepage",
    icon: "🏠",
  },
  {
    label: "Profile",
    content: "User profile info",
    icon: "👤",
  },
  {
    label: "Settings",
    content: "Manage settings",
    icon: "⚙️",
  },
];

export const DefaultTabs: Story = {
  args: {
    type: "underline",
    tabs: tabsData,

    bgColor: "#ffffff",
    tabBgColor: "#e5e7eb",
    activeColor: "#2563eb",
  },
};