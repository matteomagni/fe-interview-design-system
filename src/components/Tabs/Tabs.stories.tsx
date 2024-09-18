import type { Meta, StoryObj } from '@storybook/react';
import TabList from '@components/TabList/TabList';
import Tab from '@components/Tab/Tab';
import Tabs from '@components/Tabs/Tabs';
import { ColorVariant, TabVariant } from '@customTypes/types';
import Panel from '@components/Panel/Panel';
import PanelList from '@components/PanelList/PanelList';
import { LinesContent, SquaresContent } from '../../constants/Content';
import { userEvent, within, expect } from '@storybook/test';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  argTypes: {
    variant: {
      options: ['Pill', 'Underline'],
      control: { type: 'select' },
    },
  },
};

type Story = StoryObj<typeof Tabs>;

const tabList =
  <TabList>
    <Tab
      label="Emails"
      tabKey="ePanel"
      isSelected />
    <Tab
      badge
      badgeLabel={'Warning'}
      badgeVariant={ColorVariant.NEGATIVE}
      label="Files"
      tabKey="wPanel" />
    <Tab
      label="Edits"
      tabKey="editsPanel" />
    <Tab
      label="Dashboard"
      tabKey="dPanel" />
    <Tab
      label="Messages"
      tabKey="mPanel" />
  </TabList>;

const panelList = <PanelList>
  <Panel panelKey="ePanel">
    <LinesContent
      length={5}
      title="This is Email Panel"
    />
  </Panel>
  <Panel panelKey="wPanel">
    <SquaresContent
      length={6}
      title="This is Files Panel"
    />
  </Panel>
  <Panel panelKey="editsPanel">
    <LinesContent
      length={8}
      title="This is Edits Panel"
    />
  </Panel>
  <Panel panelKey="dPanel">
    <SquaresContent
      length={3}
      title="This is Dashboards Panel"
    />
  </Panel>
  <Panel panelKey="mPanel">
    <LinesContent
      length={7}
      title="This is Messages Panel"
    />
  </Panel>
</PanelList>

export const PillTabs: Story = {
  name: 'Tabs with Pill variant',
  args: {
    variant: 'Pill' as TabVariant,
    tabsLabel: 'Menu Tabs',
    children:
      <>
        {tabList}
        {panelList}
      </>
  },
};

export const UnderlineTabs: Story = {
  name: 'Tabs with Underline variant',
  args: {
    variant: 'Underline' as TabVariant,
    tabsLabel: 'Menu Tabs',
    children:
      <>
        {tabList}
        {panelList}
      </>
  },
};

export const UserInteractions: Story = {
  args: {
    variant: 'Underline' as TabVariant,
    tabsLabel: 'Menu Tabs',
    children:
      <>
        {tabList}
        {panelList}
      </>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('tab', { name: /edits/i }));
    console.log(canvas.getByRole('tabpanel', { name: /edits/i }));
    await expect(
      window.getComputedStyle(canvas.getByRole('tabpanel', { name: /edits/i }), null).display
    ).toBe('block');
  },
};

export default meta;