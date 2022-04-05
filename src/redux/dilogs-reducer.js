const SEND_MESSAGE = "dialogs/SEND_MESSAGE";

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;