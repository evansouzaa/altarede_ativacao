import { Meta, StoryObj } from '@storybook/react';
import { FormButtonNav } from '.';
import { Button } from 'react-bootstrap';

export default {
    title: 'Components/FormButtonNav',
    component: FormButtonNav,
    decorators: [
        (Story) => {
            return (
                <Button>
                    {Story()}
                </Button>
            )
        }
    ]
} as Meta

export const Default : StoryObj = {

}