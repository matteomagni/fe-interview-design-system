import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { TabVariant } from '@customTypes/types';
import Tabs from '@components/Tabs/Tabs';
import { panelListContent, tabListContent } from './constants/content';

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
                {tabListContent}
                {panelListContent}
            </Tabs>



            <Tabs variant={TabVariant.UNDERLINE} tabsLabel="Menu TabList">
                {tabListContent}
                {panelListContent}
            </Tabs>
        </ThemeProvider>
    );
};

export default App;
