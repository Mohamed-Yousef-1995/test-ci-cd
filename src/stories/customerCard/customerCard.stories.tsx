import { Meta, StoryObj } from "@storybook/react";
import RequestStatus from "./customerCard";

const meta: Meta<typeof RequestStatus> = {
  title: "Components/RequestStatus",
  component: RequestStatus,
  argTypes: {
    cards: {
      control: "object",
      description: "List of cards to display",
    },
  },
};

export default meta;

export const customer: StoryObj<typeof RequestStatus> = {
  args: {
    cards: [
      {
        type: "customer",
        initials: "AM",
        name: "Ali Hmaed",
        subtext: "Al Ketbi",

      }
    ],
  },
};
export const PlotWithGreen: StoryObj<typeof RequestStatus> = {
  args: {
    cards: [
      {
        type: "plot", // Required
        initials: "AM",
        name: "Action",
        subtext: "Plot Required",
        imageUrl:"https://storage.googleapis.com/a1aa/image/Gt_On8qe5zIGcJ3TWEhxepoBhZ6PziepNi452mAn_zY.jpg",
        plotType:"green",


      }
    ],
  },
};
export const PlotWithBlue: StoryObj<typeof RequestStatus> = {
  args: {
    cards: [
      {
        type: "plot", // Required
        initials: "AM",
        name: "Action",
        subtext: "Plot Required",
        imageUrl:"https://storage.googleapis.com/a1aa/image/Gt_On8qe5zIGcJ3TWEhxepoBhZ6PziepNi452mAn_zY.jpg",
        plotType:"blue",


      }
    ],
  },
};
export const owner: StoryObj<typeof RequestStatus> = {
  args: {
    cards: [
      {
        type: "owner", // Required
        initials: "AM",
        name: "OwnerShip",
        subtext: "Required",
        ownerStatus:"pending"


      }
    ],
  },
};

export const payment: StoryObj<typeof RequestStatus> = {
  args: {
    cards: [
      {
        type: "payment", // Required
        initials: "AM",
        name: "pending",
        subtext: " OwnerShip Required",
        paymentStatus:"success"


      }
    ],
  },
};

export const approval: StoryObj<typeof RequestStatus> = {
  args: {
    cards: [
      {
        type: "approval", // Required
        initials: "AM",
        name: "pending",
        subtext: " OwnerShip Required",
        approvalStatus:"pending"


      }
    ],
  },
};