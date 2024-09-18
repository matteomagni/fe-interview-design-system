import styled, { css } from 'styled-components';

const StyledTab = styled.button<{ $badge: boolean; }>`
    appearance: none;
    height: 42px;
    font-weight: 700;
    cursor: pointer;

    ${props => {
        if (props.$badge) {
            return css`
                display: flex;
                justify-content: center;
                align-items: center;
                gap: ${props.theme.spacings.xs2};
            `;
        }
    }}

    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
        height: 50px;
    }
`;

export const StyledUnderlineTab = styled(StyledTab) <{ $selected: boolean; }>`
    border: none;
    padding: 0;
    background-color: ${props => props.theme.colors.white};
    border-radius: 2px;
    position: relative;
    outline-offset: 2px;
    outline: 2px solid transparent;
    transition: outline-color .4s;

    ::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 3px;
        background-color: ${props => props.theme.colors.xxDarkGray};
        background-color: ${props =>
        props.$selected
            ? props.theme.colors.xxDarkGray
            : 'transparent'
    };
        transition: background-color .2s;
    }

    

    &:hover, &:active, &:focus-visible {
        ::after {
            display: block;
            background-color: ${props =>
        props.$selected
            ? props.theme.colors.xxDarkGray
            : props.theme.colors.gray
    };
        }
    }

    &:focus-visible {
        outline-color: ${props =>
        props.$selected
            ? props.theme.colors.black
            : props.theme.colors.xxDarkGray
    };
    }
`;

export const StyledPillTab = styled(StyledTab) <{ $selected: boolean; $badge: boolean; }>`
    border-radius: 100px;
    outline-offset: 2px;
    outline: 2px solid transparent;
    transition: outline-color .4s, background-color .2s, color .2s;

    background-color: ${props =>
        props.$selected
            ? props.theme.colors.xxDarkGray
            : props.theme.colors.white
    };
    color: ${props =>
        props.$selected
            ? props.theme.colors.white
            : props.theme.colors.xxDarkGray
    };
    border: ${props =>
        props.$selected
            ? `1px solid ${props.theme.colors.xxDarkGray}`
            : `1px solid ${props.theme.colors.gray}`
    };
    padding: ${props => `0 ${props.theme.spacings.xs}`};

    &:hover {
        background-color: ${props =>
        props.$selected
            ? props.theme.colors.xDarkGray
            : props.theme.colors.xLightGray
    };
    }

    &:active {
        background-color: ${props =>
        props.$selected
            ? props.theme.colors.darkGray
            : props.theme.colors.lightGray
    };
    }

    &:focus-visible {
        outline-color: ${props =>
        props.$selected
            ? props.theme.colors.black
            : props.theme.colors.xxDarkGray
    };
    }
`;
