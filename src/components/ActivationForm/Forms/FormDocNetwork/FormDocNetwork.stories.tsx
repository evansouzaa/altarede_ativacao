import { Meta, StoryObj } from '@storybook/react';
import { FormDocNetwork } from '.';

export default {
    title: 'Components/FormDocNetwork',
    component: FormDocNetwork,
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