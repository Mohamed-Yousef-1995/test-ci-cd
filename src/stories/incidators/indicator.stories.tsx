import { Meta, StoryObj } from "@storybook/react";
import Indicator from "./indicator";

const meta: Meta<typeof Indicator> = {
  title: "Components/indicator",
  component: Indicator,
  argTypes: {
    cardsData: {
      control: "object",
      description: "Dynamic card data for request status",
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Indicator> = {
  args: {
    cardsData: {
      stage: {
        complete: 1,
        approval: 0,
        inprogress: 0
      },
    },
  },
};
export const One: StoryObj<typeof Indicator> = {
    args: {
      cardsData: {
        stage: {
          complete: 2,
          approval: 1,
          inprogress: 0
        },
      },
    },
  };
  export const Two: StoryObj<typeof Indicator> = {
    args: {
      cardsData: {
        stage: {
          complete: 4,
          approval: 1,
          inprogress: 0
        },
      },
    },
  };
  export const Three: StoryObj<typeof Indicator> = {
    args: {
      cardsData: {
        stage: {
          complete: 4,
          approval: 1,
          inprogress: 1
        },
      },
    },
  };
