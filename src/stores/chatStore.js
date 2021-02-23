import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";

import chatActions from "../actions/chatActionTypes";



const CHANGE_EVENT = "change";
let _windows = ['iii'];
let _window={}


class ChatDataStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
       
    }

   getOpenWindows() {
        return _windows;
    }
    getWindow() {

        return _window
    }

    addWindow() {

        return _windows
    }
}


const Chat_DataStore = new ChatDataStore();


dispatcher.register((action) => {
    switch (action.chatActions) {
        case chatActions.GET_OPEN_WINDOWS:
            //_windows =  action.properties;
            //return(_windows)
            this.getOpenWindows()
            Chat_DataStore.emitChange();
            break;

                case chatActions.ADD_A_WINDOW:
                    _windows.push('action.window ' );
                    this.addWindow()
                    Chat_DataStore.emitChange();
                    break;
            


        default:
        case Chat_DataStore.GET_OPEN_WINDOWS:
            


            Chat_DataStore.emitChange();
            break

    }
});

export default Chat_DataStore;