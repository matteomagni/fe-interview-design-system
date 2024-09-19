import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { TabVariant } from '@customTypes/types';
import Tabs from '@components/Tabs/Tabs';
import { panelListContent, tabListContent } from '@components/Content/contentc';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 20px;
  }

  hr {
    margin: 40px 0;
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

      <hr />

      <Tabs variant={TabVariant.UNDERLINE} tabsLabel="Menu TabList">
        {tabListContent}
        {panelListContent}
      </Tabs>
    </ThemeProvider>
  );
};

export default App;
