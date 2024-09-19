import { ReactNode, useContext } from 'react';
import styled from 'styled-components';
import { TextSizeVariant } from '@customTypes/types';
import BodyText from '@components/BodyText/BodyText';
import { TabsContext } from '@components/Tabs/tabs.context';

type PanelProps = {
    panelKey: string,
    children: ReactNode
}

const StyledPanel = styled.div<{ $selected: boolean; }>`
    display: ${props => props.$selected ? 'block' : 'none'};
    padding: 32px 0;
`;

const Panel = (props: PanelProps) => {
    const { panelKey, children } = props;

    const tabs = useContext(TabsContext);
    const { selectedTabKey } = tabs;

    return (
        <StyledPanel
            id={`${panelKey}-panel`}
            role="tabpanel"
            aria-labelledby={`${panelKey}-tab`}
            $selected={selectedTabKey === panelKey}
        >
            <BodyText variant={TextSizeVariant.SMALL}>
                {children}
            </BodyText>
        </StyledPanel>
    );
};

export default Panel;