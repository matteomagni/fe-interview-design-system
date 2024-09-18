import BodyText from "@components/BodyText/BodyText";
import Panel from "@components/Panel/Panel";
import PanelList from "@components/PanelList/PanelList";
import Tab from "@components/Tab/Tab";
import TabList from "@components/TabList/TabList";
import { ColorVariant, TextSizeVariant } from "@customTypes/types";
import styled from "styled-components";

type ContentType = {
    length: number,
    title: string,
}

const ContentWrapper = styled.div`
    display: flex;
    gap: 12px;
    padding: 32px 0;
`;

const LinesContentWrapper = styled(ContentWrapper)`
    flex-direction: column;
`;

const Line = styled.div`
    width: 335px;
    height: 56px;
    background-color: #D9D9D9;
    border-radius: 12px;
`;

const SquaresContentWrapper = styled(ContentWrapper)`
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const Square = styled.div`
    width: 160px;
    height: 160px;
    background-color: #D9D9D9;
    border-radius: 12px;
`;

export const LinesContent = (props: ContentType) => {
    const { length, title } = props;
    const lines = [];
    for (let i = 0; i < length; i++) {
        lines.push(<Line key={i}></Line>);
    }
    return (
        <>
            <BodyText variant={TextSizeVariant.MEDIUM}>
                {title}
            </BodyText>
            <LinesContentWrapper>
                {lines}
            </LinesContentWrapper>
        </>
    );
};

export const SquaresContent = (props: ContentType) => {
    const { length, title } = props;
    const squares = [];
    for (let i = 0; i < length; i++) {
        squares.push(<Square key={i}></Square>);
    }
    return (
        <>
            <BodyText variant={TextSizeVariant.MEDIUM}>
                {title}
            </BodyText>
            <SquaresContentWrapper>
                {squares}
            </SquaresContentWrapper>
        </>

    );
};

export const tabListContent =
    <TabList>
        <Tab
            label="Emails"
            tabKey="ePanel"
            isSelected />
        <Tab
            badge
            badgeLabel={'Warning'}
            badgeVariant={ColorVariant.NEGATIVE}
            label="Files"
            tabKey="wPanel" />
        <Tab
            label="Edits"
            tabKey="editsPanel" />
        <Tab
            label="Dashboard"
            tabKey="dPanel" />
        <Tab
            label="Messages"
            tabKey="mPanel" />
    </TabList>;

export const panelListContent = <PanelList>
    <Panel panelKey="ePanel">
        <LinesContent
            length={5}
            title="This is Email Panel"
        />
    </Panel>
    <Panel panelKey="wPanel">
        <SquaresContent
            length={6}
            title="This is Files Panel"
        />
    </Panel>
    <Panel panelKey="editsPanel">
        <LinesContent
            length={8}
            title="This is Edits Panel"
        />
    </Panel>
    <Panel panelKey="dPanel">
        <SquaresContent
            length={3}
            title="This is Dashboards Panel"
        />
    </Panel>
    <Panel panelKey="mPanel">
        <LinesContent
            length={7}
            title="This is Messages Panel"
        />
    </Panel>
</PanelList>