import ChatTypes from './Chat.types'

export const addMessage = () => ({
    type: ChatTypes.ADD_MESSAGE
})
export const deleteMessage = () => ({
    type: ChatTypes.DELETE_MESSAGE
})