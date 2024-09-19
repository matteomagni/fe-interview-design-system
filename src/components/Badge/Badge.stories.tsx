import type { Meta, StoryObj } from '@storybook/react';
import Badge from '@components/Badge/Badge';
import { ColorVariant } from '@customTypes/types';

const meta: Meta<typeof Badge> = {
    component: Badge,
    argTypes: {
        variant: {
            options: ['Neutral', 'Positive', 'Negative'],
            control: { type: 'select' },
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'The <b>Badge</b> component display additional informations for a Button or a Tab'
            },
        },
    },
};

type Story = StoryObj<typeof Badge>;

export const NeutralBadge: Story = {
    args: {
        variant: 'Neutral' as ColorVariant,
        label: 'Badge label'
    },
    tags: ['autodocs'],
};

export const PositiveBadge: Story = {
    args: {
        variant: 'Positive' as ColorVariant,
        label: 'Badge label'
    },
    tags: ['autodocs'],
};

export const NegativeBadge: Story = {
    args: {
        variant: 'Negative' as ColorVariant,
        label: 'Badge label'
    },
    tags: ['autodocs'],
};

export default meta;