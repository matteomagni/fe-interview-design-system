import { ReactNode } from "react";

type PanelListProps = {
    children: ReactNode
}

const PanelList = (props: PanelListProps) => {
    const { children } = props;
    return (
        <div>{children}</div>
    );
};

export default PanelList;