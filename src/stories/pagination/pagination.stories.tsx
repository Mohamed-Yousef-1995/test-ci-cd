import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Pagination from './pagination';
import { PaginationProps } from '../../types/hooks.types';

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
//   showPageNumbers?: boolean;
//   maxVisiblePages?: number;
// }

export default {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      defaultValue: 1,
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      defaultValue: 5,
    },
    showPageNumbers: {
      control: 'boolean',
      defaultValue: true,
    },
    maxVisiblePages: {
      control: { type: 'number', min: 1 },
      defaultValue: 5,
    },
  },
} as Meta;



export const PaginationComponent: StoryFn<PaginationProps> = (args) => {
  const [page, setPage] = React.useState(1);

  return (
    <div>
      <Pagination
        {...args}
        currentPage={page}
        totalPages={5}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
};