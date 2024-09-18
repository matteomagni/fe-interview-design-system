import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '@components/Tabs/Tabs';
import { TabVariant } from '@customTypes/types';
import { panelListContent, tabListContent } from '../../constants/content';
import { userEvent, within, expect } from '@storybook/test';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  argTypes: {
    variant: {
      options: ['Pill', 'Underline'],
      control: { type: 'select' },
    },
    children: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'The <b>Tabs</b> component render an accessible Tab List and related Tab Panels. Each Tab in the TabList is a button that can be used to display his associated Panel<br/>' +
          'To associate a Tab to a Panel just assign a string to the <b>tabKey</b> prop of the Tab and assign the same string to the <b>panelKey prop of the Panel</p>'
      },
    },
  },
};

type Story = StoryObj<typeof Tabs>;

export const PillTabs: Story = {
  name: 'Tabs with Pill variant',
  args: {
    variant: 'Pill' as TabVariant,
    tabsLabel: 'Menu Tabs',
    children:
      <>
        {tabListContent}
        {panelListContent}
      </>
  },
  tags: ['autodocs'],
};

export const UnderlineTabs: Story = {
  name: 'Tabs with Underline variant',
  args: {
    variant: 'Underline' as TabVariant,
    tabsLabel: 'Menu Tabs',
    children:
      <>
        {tabListContent}
        {panelListContent}
      </>
  },
  tags: ['autodocs'],
};

export const UserInteractions: Story = {
  args: {
    variant: 'Underline' as TabVariant,
    tabsLabel: 'Menu Tabs',
    children:
      <>
        {tabListContent}
        {panelListContent}
      </>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('tab', { name: /edits/i }));
    console.log(canvas.getByRole('tabpanel', { name: /edits/i }));
    await expect(
      window.getComputedStyle(canvas.getByRole('tabpanel', { name: /edits/i }), null).display
    ).toBe('block');
  }
};

export default meta;