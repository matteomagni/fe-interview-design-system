import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (storyFn) => {
            return <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
        },
    ],
};

export default preview;
