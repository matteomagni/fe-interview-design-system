import { ReactNode, useState } from 'react';
import { TabVariant } from '@customTypes/types';
import { TabsContext } from './tabs.context';

type TabsProps = {
    variant: TabVariant,
    tabsLabel: string,
    children: ReactNode,
}

const Tabs = (props: TabsProps) => {
    const { variant, tabsLabel, children } = props;
    const [selectedTabKey, setSelectedTabKey] = useState('')
    return (
        <TabsContext.Provider value={{
            tabsLabel,
            tabListVariant: variant,
            selectedTabKey,
            setSelectedTabKey
        }}>
            {children}
        </TabsContext.Provider>
    );
};

export default Tabs;