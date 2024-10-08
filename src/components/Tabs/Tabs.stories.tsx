import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '@components/Tabs/Tabs';
import { TabVariant } from '@customTypes/types';
import { userEvent, within, expect } from '@storybook/test';
import { panelListContent, tabListContent } from '@components/Content/Content';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  argTypes: {
    variant: {
      options: ['Pill', 'Underline'],
      control: { type: 'select' },
      description: 'Set the Tabs variant',
    },
    children: {
      table: {
        disable: true
      }
    },
    tabsLabel: {
      description: 'Set the value for aria-label attribute',
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

export const OverflowTabs: Story = {
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
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
  },
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