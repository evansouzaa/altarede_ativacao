import { Meta, StoryObj } from '@storybook/react';
import { FormLocation } from '.';

export default {
    title: 'Components/FormLocation',
    component: FormLocation,
    decorators: [
        (Story) => {
            return (
                <>
                    {Story()}
                </>
            )
        }
    ]
} as Meta

export const Default: StoryObj = {}