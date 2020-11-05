import ChatTypes from './Chat.types'

export const addMessage = (text, activeThreadId) => ({
    type: ChatTypes.ADD_MESSAGE,
    text: text,
    threadId: activeThreadId,
})
export const deleteMessage = (id) => ({
    type: ChatTypes.DELETE_MESSAGE,
    id: id
})
export const openThread = (id) => ({
    type: ChatTypes.OPEN_THREAD,
    id: id
})

