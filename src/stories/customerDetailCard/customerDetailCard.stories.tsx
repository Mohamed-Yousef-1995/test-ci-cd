import { Meta, StoryObj } from "@storybook/react";
import RequestCard from "./customerDetailCard";

const meta: Meta<typeof RequestCard> = {
  title: "Components/CustomerDetailCard",
  component: RequestCard,
  argTypes: {
    cardsData: {
      control: "object",
      description: "Dynamic card data for request status",
    },
  },
};

export default meta;

export const Default: StoryObj<typeof RequestCard> = {
  args: {
    cardsData: {
      title: "Request Ranch Al...",
      id: "01001001001001",
      location: "Abu Dhabi City",
      date: "09:30 - 14/02/2025",
      stage: {
        complete: 4,
        approval: 1,
        inprogress: 0
      },
      remaining: "18 Days Remaining",
    },
  },
};
