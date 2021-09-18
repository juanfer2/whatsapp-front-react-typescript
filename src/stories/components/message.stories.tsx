import React from 'react'
import '../../styles/main.css'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Message from '../../components/message'

export default {
  title: 'Components/Message',
  component: Message,
} as ComponentMeta<typeof Message>

const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />

export const MessageTemplate = Template.bind({})
MessageTemplate.args = {
  content: 'Hi :tada',
  url: '',
  isRecipient: true,
}
