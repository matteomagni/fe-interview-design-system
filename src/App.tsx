import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { ColorVariant, TabVariant } from '@customTypes/types';
import TabList from '@components/TabList/TabList';
import Tab from '@components/Tab/Tab';
import Tabs from '@components/Tabs/Tabs';
import PanelList from '@components/PanelList/PanelList';
import Panel from '@components/Panel/Panel';
import { LinesContent, panelText, SquaresContent } from './constants/Content';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 108px 20px 20px;
  }
`

const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Tabs variant={TabVariant.PILL} tabsLabel="Menu TabList">
                <TabList>
                    <Tab
                        label="Emails"
                        tabKey="ePanel"
                        isSelected
                    />
                    <Tab
                        badge
                        badgeLabel={'Warning'}
                        badgeVariant={ColorVariant.NEGATIVE}
                        label="Files"
                        tabKey="wPanel"
                    />
                    <Tab
                        label="Edits"
                        tabKey="editsPanel"
                    />
                    <Tab
                        label="Dashboard"
                        tabKey="dPanel"
                    />
                    <Tab
                        label="Messages"
                        tabKey="mPanel"
                    />
                </TabList>
                <PanelList>
                    <Panel panelKey="ePanel">
                        <LinesContent length={5} />
                    </Panel>
                    <Panel panelKey="wPanel">
                        <SquaresContent length={6} />
                    </Panel>
                    <Panel panelKey="editsPanel">
                        <LinesContent length={8} />
                    </Panel>
                    <Panel panelKey="dPanel">
                        <SquaresContent length={3} />
                    </Panel>
                    <Panel panelKey="mPanel">
                        <LinesContent length={7} />
                    </Panel>
                </PanelList>
            </Tabs>



            <Tabs variant={TabVariant.UNDERLINE} tabsLabel="Menu TabList">
                <TabList>
                    <Tab
                        label="Emails"
                        tabKey="ePanel"
                        isSelected
                    />
                    <Tab
                        badge
                        badgeLabel={'Warning'}
                        badgeVariant={ColorVariant.NEGATIVE}
                        label="Files"
                        tabKey="wPanel"
                    />
                    <Tab
                        label="Edits"
                        tabKey="editsPanel"
                    />
                    <Tab
                        label="Dashboard"
                        tabKey="dPanel"
                    />
                    <Tab
                        label="Messages"
                        tabKey="mPanel"
                    />
                </TabList>
                <PanelList>
                    <Panel panelKey="ePanel">
                        <LinesContent length={5} />
                    </Panel>
                    <Panel panelKey="wPanel">
                        <SquaresContent length={6} />
                    </Panel>
                    <Panel panelKey="editsPanel">
                        <LinesContent length={8} />
                    </Panel>
                    <Panel panelKey="dPanel">
                        <SquaresContent length={3} />
                    </Panel>
                    <Panel panelKey="mPanel">
                        <LinesContent length={7} />
                    </Panel>
                </PanelList>
            </Tabs>
        </ThemeProvider>
    );
};

export default App;
