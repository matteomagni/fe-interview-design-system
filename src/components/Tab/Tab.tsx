import Badge from '@components/Badge/Badge';
import BodyText from '@components/BodyText/BodyText';
import { ColorVariant, TabVariant, TextSizeVariant } from '@customTypes/types';
import { StyledPillTab, StyledUnderlineTab } from './Tab.styled';
import { useContext, useEffect } from 'react';
import { TabsContext } from '@components/Tabs/tabs.context';

type TabProps = {
    variant?: TabVariant;
    label: string;
    tabKey?: string;
    badge?: boolean;
    badgeLabel?: string;
    badgeVariant?: ColorVariant;
    isSelected?: boolean;
};

const Tab = (props: TabProps) => {
    const {
        label,
        tabKey,
        badge,
        badgeLabel,
        badgeVariant,
        isSelected
    } = props;

    const tabs = useContext(TabsContext);
    const { tabListVariant, selectedTabKey, setSelectedTabKey } = tabs;
    let TabComponent = StyledUnderlineTab;
    if (tabListVariant === TabVariant.PILL) {
        TabComponent = StyledPillTab;
    }

    useEffect(() => {
        if (typeof selectedTabKey === 'undefined' || selectedTabKey.length === 0) {
            isSelected && setSelectedTabKey(tabKey || '');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TabComponent
            id={`${tabKey}-tab`}
            role="tab"
            aria-controls={`${tabKey}-panel`}
            aria-selected={selectedTabKey === tabKey}
            $selected={selectedTabKey === tabKey}
            $badge={badge || false}
            onClick={() => {
                setSelectedTabKey && setSelectedTabKey(tabKey || '')
            }}
        >
            <BodyText variant={TextSizeVariant.MEDIUM}>{label}</BodyText>
            {badge && <Badge variant={badgeVariant || ColorVariant.NEUTRAL} label={badgeLabel || ''} />}
        </TabComponent>
    );
};

export default Tab;
