import { Meta, StoryObj } from '@storybook/react';
import { FormClient } from '.';

export default {
    title: 'Components/FormClient',
    component: FormClient,
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