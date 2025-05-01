import type { Meta, StoryObj } from '@storybook/react';
import { TablePopup } from './table';

const meta: Meta<typeof TablePopup> = {
  title: 'Components/TablePopup',
  component: TablePopup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    buttonText: { control: 'text' },
    pageSize: { control: { type: 'number', min: 1, max: 20 } },
  },
};

export default meta;
type Story = StoryObj<typeof TablePopup>;

// Sample data sets
const userColumns = [
  { key: 'id', header: 'ID', sortable: true },
  { key: 'name', header: 'Name', sortable: true, searchable: true },
  { key: 'email', header: 'Email', sortable: true, searchable: true },
  { key: 'role', header: 'Role', sortable: true, searchable: true },
];

const userData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor' },
  { id: 5, name: 'Tom Wilson', email: 'tom@example.com', role: 'Admin' },
  { id: 6, name: 'Sarah Lee', email: 'sarah@example.com', role: 'Viewer' },
  { id: 7, name: 'Mike Chen', email: 'mike@example.com', role: 'Editor' },
  { id: 8, name: 'Lisa Wong', email: 'lisa@example.com', role: 'Admin' },
  { id: 9, name: 'David Kim', email: 'david@example.com', role: 'Viewer' },
  { id: 10, name: 'Emily Davis', email: 'emily@example.com', role: 'Editor' },
];

const productColumns = [
  { key: 'id', header: 'Product ID', sortable: true },
  { key: 'name', header: 'Product Name', sortable: true, searchable: true },
  { key: 'category', header: 'Category', sortable: true, searchable: true },
  { key: 'price', header: 'Price', sortable: true },
  { key: 'stock', header: 'In Stock', sortable: true },
];

const productData = [
  { id: 'P001', name: 'Laptop', category: 'Electronics', price: '$999', stock: 23 },
  { id: 'P002', name: 'Smartphone', category: 'Electronics', price: '$699', stock: 41 },
  { id: 'P003', name: 'Desk Chair', category: 'Furniture', price: '$249', stock: 15 },
  { id: 'P004', name: 'Coffee Maker', category: 'Appliances', price: '$89', stock: 32 },
  { id: 'P005', name: 'Headphones', category: 'Electronics', price: '$159', stock: 27 },
  { id: 'P006', name: 'Monitor', category: 'Electronics', price: '$349', stock: 18 },
  { id: 'P007', name: 'Office Desk', category: 'Furniture', price: '$399', stock: 9 },
  { id: 'P008', name: 'Microwave', category: 'Appliances', price: '$129', stock: 22 },
  { id: 'P009', name: 'Wireless Mouse', category: 'Electronics', price: '$49', stock: 36 },
  { id: 'P010', name: 'Blender', category: 'Appliances', price: '$79', stock: 14 },
  { id: 'P011', name: 'Keyboard', category: 'Electronics', price: '$89', stock: 29 },
  { id: 'P012', name: 'Bookshelf', category: 'Furniture', price: '$199', stock: 11 },
];

// Generate a large dataset for performance testing
const generateLargeDataset = () => {
  const largeData = [];
  for (let i = 1; i <= 100; i++) {
    largeData.push({
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      role: i % 3 === 0 ? 'Admin' : i % 3 === 1 ? 'Editor' : 'Viewer',
    });
  }
  return largeData;
};

// Stories
export const UserTable: Story = {
  args: {
    title: '',
    columns: userColumns,
    data: userData,
    buttonText: 'View Users',
    pageSize: 5,
  },
};

export const ProductInventory: Story = {
  args: {
    title: 'Product Inventory',
    columns: productColumns,
    data: productData,
    buttonText: 'View Products',
    pageSize: 6,
  },
};

export const LargeDataTable: Story = {
  args: {
    title: 'Large User Dataset',
    columns: userColumns,
    data: generateLargeDataset(),
    buttonText: 'View All Users',
    pageSize: 8,
  },
};