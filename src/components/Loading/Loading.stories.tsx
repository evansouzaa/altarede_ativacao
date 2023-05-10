import { Meta, StoryObj } from '@storybook/react';
import Loading from '.';

export default {
    title: 'Components/Loading',
    component: Loading,
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