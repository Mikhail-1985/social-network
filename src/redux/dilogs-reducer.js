const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Здарова" },
        { id: 3, message: "Как сам?" },
    ],
    dialogs: [
        { id: 1, name: "Михаил Олегович" },
        { id: 2, name: "Екатерина Александровна" },
        { id: 3, name: "Димас" },
    ],
    newMessageBody: ''
}

const dialogsReducer = (state=initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({id: 6, message: body})
        return state;
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) => ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    })

export default dialogsReducer;