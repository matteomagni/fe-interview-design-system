import { ReactNode } from 'react';
import styled from 'styled-components';
import { TextSizeVariant } from '@customTypes/types';

type BodyTextProps = {
    variant: TextSizeVariant,
    children: ReactNode
}

const StyledBodyText = styled.span<{ $variant: TextSizeVariant; }>`
    line-height: 150%;
    font-family: ${props => props.theme.fonts.default};
    font-size: ${props => props.$variant === TextSizeVariant.SMALL ? props.theme.fontSizes.small : props.theme.fontSizes.medium};  

`;

const BodyText = (props: BodyTextProps) => {
    const { children, variant } = props;
    return (
        <StyledBodyText $variant={variant}>{children}</StyledBodyText>
    );
};

export default BodyText;
