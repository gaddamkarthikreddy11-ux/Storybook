import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "./Carousel";
import type { Slide } from "./Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  argTypes: {
    slides: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const DefaultCarousel: Story = {
  render: (args) => {
    const [slides, setSlides] = useState<Slide[]>(
      args.slides || []
    );

    const handleUpload = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const files = e.target.files;
      if (!files) return;


      

      const newSlides: Slide[] = Array.from(files).map(
        (file) => ({
          image: URL.createObjectURL(file),
          // title: file.name,
          // description: "Local image",
        })
      );

      setSlides(newSlides);
    };

    return (
      <div>
        
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleUpload}
          style={{ marginBottom: "20px" }}
        />

      
        <Carousel {...args} slides={slides} />
      </div>
    );
  },

  args: {
    slides: [
      {
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        title: "Mountain",
        description: "From URL",
      },
      {
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        title: "Beach",
        description: "From URL",
      },
    ],
  },
};