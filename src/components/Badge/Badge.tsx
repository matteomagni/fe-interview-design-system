import styled from 'styled-components';
import { ColorVariant, TextSizeVariant } from '@customTypes/types';
import BodyText from '@components/BodyText/BodyText';

type BadgeProps = {
    variant: ColorVariant;
    label: string;
};

const StyledBadge = styled.span<{ $variant: ColorVariant }>`
    border-radius: 8px;
    font-weight: 700;
    padding: ${props => `${props.theme.spacings.xs4} ${props.theme.spacings.xs3}`};
    color: ${props => props.theme.colors.xxDarkGray};
    background-color: ${props => {
        switch (props.$variant) {
            case ColorVariant.NEGATIVE:
                return props.theme.colors.negative;
            case ColorVariant.POSITIVE:
                return props.theme.colors.positive;
            default:
                return props.theme.colors.neutral;
        }
    }};

    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
        padding: ${props => `${props.theme.spacings.xs3} ${props.theme.spacings.xs2}`};
        border-radius: 12px;
    }
`;

const Badge = (props: BadgeProps) => {
    const { label, variant } = props;
    return (
        <StyledBadge $variant={variant}>
            <BodyText variant={TextSizeVariant.SMALL}>{label}</BodyText>
        </StyledBadge>
    );
};

export default Badge;
