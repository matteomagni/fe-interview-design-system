import { ReactNode, useState } from "react";
import { TabsContext } from "./tabs.context";
import { TabVariant } from "@customTypes/types";

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