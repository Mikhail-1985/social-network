import dialogsReducer from "./dilogs-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _state: {
        profilePage: {
            posts:[
                { id: 1, message: 'Hello', like: 15 },
                { id: 1, message: 'How are you?', like: 11 },
                { id: 1, message: 'I am Ok', like: 12 }
            ],
            newPostText: 'Hello!'
        },
        dialogsPage:{
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
            newMessageBody: '',

        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}



export default store;
window.store = store