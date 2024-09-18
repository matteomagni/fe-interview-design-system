import { TabVariant } from "@customTypes/types";
import { useContext } from "react";
import { ReactNode } from "react";
import styled from "styled-components";
import { TabsContext } from "@components/Tabs/tabs.context";

type TabListProps = {
    children: ReactNode;
};

const StyledTabList = styled.div<{ $variant: TabVariant; }>`
    display: flex;
    gap: ${props =>
        props.$variant === TabVariant.UNDERLINE
            ? props.theme.spacings.l
            : props.theme.spacings.xs2
    };

    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
        gap: ${props =>
        props.$variant === TabVariant.UNDERLINE
            ? props.theme.spacings.xl
            : props.theme.spacings.xs
    };
    }
`;

const StyledScrollWrapper = styled.div`
    max-width: 100vw;
    overflow-x: auto;
    padding: 4px;
`;

const TabList = (props: TabListProps) => {
    const { children } = props;
    const tabs = useContext(TabsContext);
    const { tabsLabel, tabListVariant } = tabs;

    return (
        <StyledScrollWrapper>
            <StyledTabList
                $variant={tabListVariant}
                role="tablist"
                aria-label={tabsLabel}
            >

                {children}

            </StyledTabList>
        </StyledScrollWrapper>
    );
};

export default TabList;