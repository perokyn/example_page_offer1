import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";

import chatActions from "../actions/chatActionTypes";



const CHANGE_EVENT = "change";
let _windows = [];
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

    addWindow(window) {
        
_windows.push(window)
this.emitChange() 
        return _windows
    }

    removeWindow(window) {
        console.log("REMOVE WINDOW Called wit id",_windows.indexOf(window))
const index=_windows.indexOf(window)
 _windows.splice(index,1)
 this.emitChange() 
        return _windows
    }



}


const Chat_DataStore = new ChatDataStore();


dispatcher.register((action) => {
    switch (action.chatActions) {
        case chatActions.GET_OPEN_WINDOWS:
            //_windows =  action.properties;
            //return(_windows)
            Chat_DataStore.getOpenWindows()
            Chat_DataStore.emitChange();
            break;

                case chatActions.ADD_A_WINDOW:
                    Chat_DataStore.addWindow(action.window);
                   // this.addWindow(action.window)
                    Chat_DataStore.emitChange();
                    break;
            
case chatActions.REMOVE_A_WINDOW:
    Chat_DataStore.removeWindow(action.window)
    Chat_DataStore.emitChange()
break;
        default:
        case Chat_DataStore.GET_OPEN_WINDOWS:
            


            Chat_DataStore.emitChange();
            break

    }
});

export default Chat_DataStore;