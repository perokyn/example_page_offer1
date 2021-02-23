import dispatcher from "../appDispatcher";
import chatActionTypes from "./chatActionTypes";

export function getOpenWindows() {
    dispatcher.dispatch({
        chatActionTypes:chatActionTypes.GET_OPEN_WINDOWS
           });
}



export function getWindow(id) {
    const windowID = id

    dispatcher.dispatch({
        actionTypes:chatActionTypes.GET_A_WINDOW,
        window:windowID
    });
}

export function addWindow(id){
const window=id
console.log("chatAction called with ID",id)

dispatcher.dispatch({

chatActionTypes:chatActionTypes.ADD_A_WINDOW,
window:window

})


}



export function removeWindow(id) {
    const windowID = id

    dispatcher.dispatch({
        actionTypes:chatActionTypes.REMOVE_A_WINDOW,
        window:windowID
    });
}
