/* eslint-disable @typescript-eslint/no-explicit-any */

import { Meta, StoryFn } from "@storybook/react";
import { PlotOwner } from "./plotOwner";

export default {
    title: "Components/PlotOwner",
    component: PlotOwner,
  } as Meta;

  const Template: StoryFn<any> = (args) => <PlotOwner {...args} />;

  export const Default = Template.bind({});
  Default.args = {
    buttonClass: 'border-red-500',
    plots: [
      {
        id: "RCH1001",
        address: "0-111-000-RCH1001",
        area: "Dihan",
        landUse: "Ranch",
        status: "Temporary",
        owner: {
          name: "Amir Al-Jamal",
          tribe: "Al Ketbi",
          eid: "123-4567-192827-1",
          mobile: "+971 051 1234 5678",
        },
      },
      {
        id: "RCH1003",
        address: "0-111-000-RCH1003",
        area: "abc",
        landUse: "Ranch",
        status: "Temporary",
        owner: {
          name: "Amir Al-Jamal",
          tribe: "Al Ketbi",
          eid: "123-4567-192827-1",
          mobile: "+971 051 1234 5678",
        },
      },
    ],
  };
