const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
  if (action.type === ADD_MESSAGE) {
    let newMessage = {
      id: 7,
      message: state.newMessageText,
    };
    state.messagesData.push(newMessage);
    state.newMessageText = "";
  } else if (action.type === UPDATE_MESSAGE_TEXT) {
    state.newMessageText = action.newMessage;
  }
  return state;
};

export default dialogsReducer;
