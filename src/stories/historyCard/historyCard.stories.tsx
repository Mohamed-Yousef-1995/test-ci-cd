/* eslint-disable @typescript-eslint/no-explicit-any */

import { Meta, StoryFn } from "@storybook/react";
import { PlotApproval } from "./historyCard";

export default {
    title: 'Components/PlotApproval',
    component: PlotApproval,
} as Meta;

const Template: StoryFn<any> = (args) => <PlotApproval {...args} />;

export const Default = Template.bind({});
Default.args = {
    approvals: [
        {
            date: '11:23 - 20/03/2025',
            by: 'Farzana Shah',
            to: 'Mohammed Jaser',
            status: 'PROCESSING',
        },
        {
            date: '12:45 - 22/03/2025',
            by: 'Ali Khan',
            to: 'Ahmed Javed',
            status: 'PROCESSING',
        },
        {
            date: '14:10 - 25/03/2025',
            by: 'Sara Fatima',
            to: 'Bilal Ahmed',
            status: 'PROCESSING',
        },
    ],
    buttonClass: 'bg-[#1864AB]',
    cardClass: 'bg-[#3E3F47]'
};

export const Approved = Template.bind({});
Approved.args = {
    cardClass: 'bg-[#141E1E] border-[#2B8A38] border-1',
    buttonClass: 'bg-[#2B8A38]',
    approvals: [
        {
            date: '10:00 - 18/03/2025',
            by: 'Zara Ahmed',
            to: 'Waqas Malik',
            status: 'APPROVED',
        },
        {
            date: '11:15 - 19/03/2025',
            by: 'Ibrahim Khan',
            to: 'Salman Qureshi',
            status: 'APPROVED',
        },
    ],
};

export const Rejected = Template.bind({});
Rejected.args = {
    cardClass: 'bg-[#141E1E]',
    buttonClass: 'bg-[#2B8A38]',
    approvals: [
        {
            date: '09:30 - 17/03/2025',
            by: 'Kashif Ali',
            to: 'Nadia Malik',
            status: 'REJECTED',
        },
        {
            date: '10:45 - 18/03/2025',
            by: 'Asim Khan',
            to: 'Sana Fatima',
            status: 'REJECTED',
        },
    ],
};

export const MixedStatuses = Template.bind({});
MixedStatuses.args = {
    cardClass: 'bg-[#141E1E]',
    buttonClass: 'bg-[#2B8A38]',
    approvals: [
        {
            date: '08:00 - 15/03/2025',
            by: 'Yasir Ahmed',
            to: 'Hira Shah',
            status: 'APPROVED',
        },
        {
            date: '09:15 - 16/03/2025',
            by: 'Asad Ali',
            to: 'Nida Fatima',
            status: 'REJECTED',
        },
        {
            date: '10:30 - 17/03/2025',
            by: 'Ali Raza',
            to: 'Adeel Khan',
            status: 'PROCESSING',
        },
    ],
};

export const Empty = Template.bind({});
Empty.args = {
    approvals: [],
};
