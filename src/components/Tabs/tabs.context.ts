import { TabVariant } from '@customTypes/types';
import React, { Dispatch, SetStateAction } from 'react';

export type TabsContextType = {
    tabListVariant: TabVariant,
    tabsLabel: string
    selectedTabKey: string,
    setSelectedTabKey: Dispatch<SetStateAction<string>>,
}
const initialContext = {} as TabsContextType;

export const TabsContext = React.createContext(initialContext);