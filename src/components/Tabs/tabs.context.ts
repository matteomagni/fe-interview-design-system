import React, { Dispatch, SetStateAction } from 'react';
import { TabVariant } from '@customTypes/types';

export type TabsContextType = {
    tabListVariant: TabVariant,
    tabsLabel: string
    selectedTabKey: string,
    setSelectedTabKey: Dispatch<SetStateAction<string>>,
}
const initialContext = {} as TabsContextType;

export const TabsContext = React.createContext(initialContext);