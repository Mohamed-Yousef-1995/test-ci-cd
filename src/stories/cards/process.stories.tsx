import React from "react";
import Process from "./Process";

export default {
  title: "Components/Process",
  component: Process,
};

const Template = (args) => <Process {...args} />;

export const Required = Template.bind({});
Required.args = {
  status: "required",
  stage: {
    complete: 3,
    approval: 2,
    inprogress: 1,
  },
};

export const Approved = Template.bind({});
Approved.args = {
  status: "approved",
  stage: {
    complete: 4,
    approval: 1,
    inprogress: 1,
  },
};
