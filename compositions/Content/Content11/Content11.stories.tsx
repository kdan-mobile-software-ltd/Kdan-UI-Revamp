import { Meta, StoryObj } from '@storybook/react';
import { Content11 } from '.';

const meta = {
  title: 'Competition/Content1-1',
  component: Content11,
  argTypes: {
    data: { control: 'object', description: '[required] only `title` is require in each Item' },
    customStyle: { control: 'object' },
  },
  tags: ['autodocs'],
} as Meta<typeof Content11>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: [
      {
        title: 'panel_1_title Subscription Policies',
        desc: 'panel_1_desc The subscription will automatically renew and your card will be charged until you cancel. Coupons are for one-time use only.  Coupons are for one-time use only.',
        icon: {
          src: 'https://kdan-website.preparing.kdanmobile.com/images/kdan_all_icon/cloud/dottedsign.svg',
          alt: 'img-multi-media-panel-1',
        },
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_2_title',
        desc: 'panel_2_desc',
        icon: {
          src: 'https://kdan-website.preparing.kdanmobile.com/images/kdan_all_icon/cloud/dottedsign.svg',
          alt: 'img-multi-media-panel-2',
        },
        hyperlink: {
          href: 'https://ithelp.ithome.com.tw/',
          label: 'go to ithome',
        },
      },
      {
        title: 'panel_3_title',
        desc: 'panel_3_desc',
        icon: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/icons/ic-next.svg',
          alt: 'img-multi-media-panel-3',
        },
      },
      {
        title: 'panel_4_title',
        desc: 'panel_4_desc',
        icon: {
          src: 'https://creative-store.preparing.kdanmobile.com/images/icons/ic-next.svg',
          alt: 'img-multi-media-panel-3',
        },
      },
    ],
    customStyle: {
      others: { numberOfRow: 3 },
      title: { color: 'gray700' },
    },
  },
};

export const TwoRow: Story = {
  args: {
    data: [
      {
        title: 'panel_1_title Subscription Policies 2',
        desc: 'panel_1_desc The subscription will automatically renew and your card will be charged until you cancel. Coupons are for one-time use only.  Coupons are for one-time use only.',
        hyperlink: {
          href: 'https://www.google.com/',
          label: 'go to google',
        },
      },
      {
        title: 'panel_2_title 2',
        desc: 'panel_2_desc',

        hyperlink: {
          href: 'https://ithelp.ithome.com.tw/',
          label: 'go to ithome',
        },
      },
      {
        title: 'panel_3_title 2',
        desc: 'panel_3_desc',

      },
      {
        title: 'panel_4_title 2',
        desc: 'panel_4_desc',
      },
    ],
    customStyle: {
      others: { numberOfRow: 2 },
      title: { color: '#22BBAA' },
    },
  },
};