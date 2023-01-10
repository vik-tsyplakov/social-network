const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Nick",
      photo:
        "https://images.pexels.com/photos/1812634/pexels-photo-1812634.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "John",
      photo:
        "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      name: "Ivan",
      photo:
        "https://images.pexels.com/photos/1054048/pexels-photo-1054048.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      name: "Anna",
      photo:
        "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      name: "Alex",
      photo:
        "https://images.pexels.com/photos/2748242/pexels-photo-2748242.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 6,
      name: "Harry",
      photo:
        "https://images.pexels.com/photos/7561911/pexels-photo-7561911.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ],
  messagesData: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "What`s up?" },
    { id: 3, message: "Where are you?" },
    { id: 4, message: "Ok" },
    { id: 5, message: "Have a good day!" },
    { id: 6, message: "I like it" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
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
export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    newMessage: text,
  };
};

export default dialogsReducer;
